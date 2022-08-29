import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Cloud from '@mui/icons-material/Cloud';
import Grid from '@mui/material/Grid';
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

const style = {
    box: {
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    margin: { mt: 3, mb: 2 }
}
const postUrl = process.env.APP_ID
export default function Home(props) {
    const [userProfile, setUserProfile] = React.useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {
        loginWithRedirect
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
                    </Toolbar>
                </AppBar>

            </ElevationScroll>
            <Toolbar />
            <Box sx={style.box} >
                <Typography variant="h6" component="div" sx={{ flex: 1 }} >
                    Welcome to the weather forecast web application. Please login with your <br />
                    Github user to use the application and view the weather in your city. {postUrl}
                    <Grid container>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={style.margin}
                            onClick={loginWithRedirect}
                        >
                            Login
                        </Button>
                    </Grid>
                </Typography>
            </Box>

        </React.Fragment >
    );
}
