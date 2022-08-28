import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Cloud from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useAuth0 } from '@auth0/auth0-react';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Home(props) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [userProfile, setUserProfile] = React.useState({});
    const {
        isAuthenticated,
        loginWithRedirect, logout, user
    } = useAuth0();

    useEffect(() => {
        let session = localStorage.getItem("userProfile");
        setUserProfile(JSON.parse(session));
    }, [])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <React.Fragment>
            <CssBaseline />

            <ElevationScroll {...props}>
                <AppBar style={{ background: '#87CEEB' }} >
                    <Toolbar>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Cloud />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flex: 1 }}>
                            Weather Forecast
                        </Typography>
                        <div>

                            <Button
                                type="submit"
                                variant="contained"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>

            </ElevationScroll>
            <Toolbar />
            {isAuthenticated && (
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" component="div" sx={{ flex: 1 }} >
                        {user.name}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flex: 1 }} >
                        {`https://github.com/${user.nickname}`}
                    </Typography>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => navigate('/weather')}
                    >
                        Display Weather
                    </Button>
                </Box>
            )}
        </React.Fragment >
    );
}
