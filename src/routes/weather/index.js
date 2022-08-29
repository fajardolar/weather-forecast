import React, { useEffect, useState } from 'react';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams } from 'react-router-dom';

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
    table: { minWidth: 650 },
    back: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
    },
    margin: { mt: 3, mb: 2, },
    weather: { flex: 1 }
};

export default function Home(props) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const cells = ["Date (mm/dd/yyyy)", "Temp(°F)", "Description", "Main", "Pressure", "Humidity"];
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${searchParams.get('lat')}&lon=${searchParams.get('long')}&cnt=16&appid=<app_id>&units=imperial`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json.list);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [data]);

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
                            color="inherit"
                        >
                            <Cloud />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={style.weather}>
                            Weather Forecast
                        </Typography>
                        <div>
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                Logout
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Box sx={style.box} >
                <TableContainer component={Paper}>
                    <Table sx={style.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                {
                                    cells.length > 0 && cells.map((dt, i) =>
                                    (<TableCell key={i} align="center">
                                        <strong>{dt}</strong>
                                    </TableCell>)
                                    )
                                }

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.length == 0 ? <TableCell align="center" colSpan={6}><CircularProgress /></TableCell>
                                : data.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {new Date(1546108200 * 1000).toLocaleDateString("en-US")}
                                        </TableCell>
                                        <TableCell align="center">{row.temp.day}</TableCell>
                                        <TableCell align="center">{row.weather[0].description}</TableCell>
                                        <TableCell align="center">{row.weather[0].main}</TableCell>
                                        <TableCell align="center">{row.pressure}</TableCell>
                                        <TableCell align="center">{row.humidity}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Grid container sx={style.back}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={style.margin}
                        onClick={() => navigate('/home')}
                    >
                        Back
                    </Button>
                </Grid>
            </Box>
        </React.Fragment >
    );
}
