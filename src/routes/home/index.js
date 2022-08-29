import React, { useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Cloud from '@mui/icons-material/Cloud';
import Search from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useAuth0 } from '@auth0/auth0-react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
    username: { flex: 1 },
    github: { flex: 1, mb: 2 },
    autocomplete: { width: 300 }
};

export default function Home(props) {
    const navigate = useNavigate();
    const [city, setCity] = React.useState([]);
    const [lat, setLat] = React.useState([]);
    const [long, setLong] = React.useState([]);
    const [userProfile, setUserProfile] = React.useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {
        isAuthenticated,
        logout, user
    } = useAuth0();

    useEffect(() => {
        let session = localStorage.getItem("userProfile");
        setUserProfile(JSON.parse(session));
    }, [])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [value, setValue] = React.useState(null);
    const [options, setOptions] = React.useState([]);
    const previousController = useRef();

    const getData = (searchTerm) => {
        if (previousController.current) {
            previousController.current.abort();
        }
        const controller = new AbortController();
        const signal = controller.signal;
        previousController.current = controller;
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=447de07f839b7e9041672cd99146d7e4`, {
            cors: false
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                const updatedOptions = myJson.map((p) => {
                    let state = p.state != undefined ? ", " + p.state : "";
                    return { title: p.name + state, lat: p.lat, long: p.lon };
                });
                setOptions(updatedOptions);
            });
    };

    const onInputChange = (event, value, reason) => {
        if (value) {
            getData(value);
        } else {
            setOptions([
            ]);
        }
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
                    sx={style.box}
                >
                    <Typography variant="h6" component="div" sx={style.username} >
                        {user.name}
                    </Typography>
                    <Typography variant="h6" component="div" sx={style.github} >
                        {`https://github.com/${user.nickname}`}
                    </Typography>

                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        sx={style.autocomplete}
                        options={options}
                        onInputChange={onInputChange}
                        getOptionLabel={(option) => option.title}
                        onChange={(event, value) => {
                            setLat(value.lat);
                            setLong(value.long);
                            setValue(value.title);
                        }}
                        renderInput={(params) => <TextField {...params} label={<React.Fragment>
                            <Search className="myIcon" fontSize="small" />
                            City
                        </React.Fragment>} variant="outlined"

                        />}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={value == null}
                        onClick={() => navigate(`/weather?lat=${lat}&long=${long}`)}
                    >
                        Display Weather
                    </Button>
                </Box>
            )
            }
        </React.Fragment >
    );
}