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
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${searchParams.get('lat')}&lon=${searchParams.get('long')}&cnt=16&appid=447de07f839b7e9041672cd99146d7e4&units=imperial`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData({
                    "city": {
                        "id": 1721906,
                        "name": "Cabanatuan City",
                        "coord": {
                            "lon": 120.9684,
                            "lat": 15.4905
                        },
                        "country": "PH",
                        "population": 220250,
                        "timezone": 28800
                    },
                    "cod": "200",
                    "message": 9.0856155,
                    "cnt": 16,
                    "list": [
                        {
                            "dt": 1661742000,
                            "sunrise": 1661722999,
                            "sunset": 1661767894,
                            "temp": {
                                "day": 88.03,
                                "min": 75,
                                "max": 89.56,
                                "night": 77.58,
                                "eve": 80.08,
                                "morn": 75
                            },
                            "feels_like": {
                                "day": 99.21,
                                "night": 79.27,
                                "eve": 85.86,
                                "morn": 76.53
                            },
                            "pressure": 1010,
                            "humidity": 68,
                            "weather": [
                                {
                                    "id": 502,
                                    "main": "Rain",
                                    "description": "heavy intensity rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.86,
                            "deg": 31,
                            "gust": 8.63,
                            "clouds": 20,
                            "pop": 1,
                            "rain": 10.17
                        },
                        {
                            "dt": 1661828400,
                            "sunrise": 1661809405,
                            "sunset": 1661854252,
                            "temp": {
                                "day": 87.76,
                                "min": 75.51,
                                "max": 89.71,
                                "night": 77.88,
                                "eve": 80.67,
                                "morn": 75.51
                            },
                            "feels_like": {
                                "day": 99.05,
                                "night": 79.65,
                                "eve": 86.77,
                                "morn": 77.18
                            },
                            "pressure": 1008,
                            "humidity": 69,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.1,
                            "deg": 263,
                            "gust": 7.74,
                            "clouds": 76,
                            "pop": 1,
                            "rain": 13.14
                        },
                        {
                            "dt": 1661914800,
                            "sunrise": 1661895812,
                            "sunset": 1661940608,
                            "temp": {
                                "day": 86.94,
                                "min": 75.33,
                                "max": 89.19,
                                "night": 77.09,
                                "eve": 81.73,
                                "morn": 75.33
                            },
                            "feels_like": {
                                "day": 96.44,
                                "night": 78.93,
                                "eve": 89.11,
                                "morn": 77.02
                            },
                            "pressure": 1007,
                            "humidity": 68,
                            "weather": [
                                {
                                    "id": 502,
                                    "main": "Rain",
                                    "description": "heavy intensity rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 8.25,
                            "deg": 175,
                            "gust": 14.63,
                            "clouds": 63,
                            "pop": 1,
                            "rain": 21.3
                        },
                        {
                            "dt": 1662001200,
                            "sunrise": 1661982218,
                            "sunset": 1662026965,
                            "temp": {
                                "day": 85.87,
                                "min": 75.27,
                                "max": 86.88,
                                "night": 77.14,
                                "eve": 80.69,
                                "morn": 75.27
                            },
                            "feels_like": {
                                "day": 95.63,
                                "night": 78.84,
                                "eve": 86.63,
                                "morn": 76.96
                            },
                            "pressure": 1008,
                            "humidity": 72,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.4,
                            "deg": 27,
                            "gust": 9.89,
                            "clouds": 98,
                            "pop": 0.96,
                            "rain": 17.82
                        },
                        {
                            "dt": 1662087600,
                            "sunrise": 1662068623,
                            "sunset": 1662113321,
                            "temp": {
                                "day": 85.37,
                                "min": 75.42,
                                "max": 86.47,
                                "night": 77.16,
                                "eve": 80.51,
                                "morn": 75.42
                            },
                            "feels_like": {
                                "day": 95.22,
                                "night": 78.94,
                                "eve": 86.34,
                                "morn": 77.07
                            },
                            "pressure": 1008,
                            "humidity": 74,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.96,
                            "deg": 296,
                            "gust": 11.86,
                            "clouds": 100,
                            "pop": 0.62,
                            "rain": 10.82
                        },
                        {
                            "dt": 1662174000,
                            "sunrise": 1662155029,
                            "sunset": 1662199676,
                            "temp": {
                                "day": 85.75,
                                "min": 75.04,
                                "max": 85.84,
                                "night": 76.05,
                                "eve": 81.32,
                                "morn": 75.04
                            },
                            "feels_like": {
                                "day": 95.31,
                                "night": 77.72,
                                "eve": 88.27,
                                "morn": 76.71
                            },
                            "pressure": 1006,
                            "humidity": 72,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 8.9,
                            "deg": 308,
                            "gust": 13.29,
                            "clouds": 100,
                            "pop": 0.7,
                            "rain": 9.01
                        },
                        {
                            "dt": 1662260400,
                            "sunrise": 1662241434,
                            "sunset": 1662286032,
                            "temp": {
                                "day": 82.76,
                                "min": 74.89,
                                "max": 82.76,
                                "night": 74.89,
                                "eve": 75.43,
                                "morn": 76.05
                            },
                            "feels_like": {
                                "day": 90.39,
                                "night": 76.46,
                                "eve": 77.09,
                                "morn": 77.72
                            },
                            "pressure": 1006,
                            "humidity": 79,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.85,
                            "deg": 324,
                            "gust": 11.41,
                            "clouds": 100,
                            "pop": 0.78,
                            "rain": 5.12
                        },
                        {
                            "dt": 1662346800,
                            "sunrise": 1662327839,
                            "sunset": 1662372386,
                            "temp": {
                                "day": 83.05,
                                "min": 74.61,
                                "max": 83.05,
                                "night": 75.31,
                                "eve": 77.31,
                                "morn": 74.62
                            },
                            "feels_like": {
                                "day": 90.81,
                                "night": 76.91,
                                "eve": 79.02,
                                "morn": 76.15
                            },
                            "pressure": 1007,
                            "humidity": 78,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 12.03,
                            "deg": 211,
                            "gust": 16.82,
                            "clouds": 99,
                            "pop": 0.83,
                            "rain": 4.72
                        },
                        {
                            "dt": 1662433200,
                            "sunrise": 1662414244,
                            "sunset": 1662458741,
                            "temp": {
                                "day": 86.07,
                                "min": 74.25,
                                "max": 88.43,
                                "night": 76.77,
                                "eve": 85.08,
                                "morn": 74.26
                            },
                            "feels_like": {
                                "day": 95.68,
                                "night": 78.46,
                                "eve": 96.6,
                                "morn": 75.85
                            },
                            "pressure": 1010,
                            "humidity": 71,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.95,
                            "deg": 204,
                            "gust": 8.3,
                            "clouds": 100,
                            "pop": 0.56,
                            "rain": 2.53
                        },
                        {
                            "dt": 1662519600,
                            "sunrise": 1662500648,
                            "sunset": 1662545095,
                            "temp": {
                                "day": 86.23,
                                "min": 75.83,
                                "max": 86.23,
                                "night": 78.15,
                                "eve": 83.97,
                                "morn": 75.83
                            },
                            "feels_like": {
                                "day": 95.65,
                                "night": 79.84,
                                "eve": 94.26,
                                "morn": 77.49
                            },
                            "pressure": 1012,
                            "humidity": 70,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.21,
                            "deg": 174,
                            "gust": 4.59,
                            "clouds": 99,
                            "pop": 0.68,
                            "rain": 0.82
                        },
                        {
                            "dt": 1662606000,
                            "sunrise": 1662587053,
                            "sunset": 1662631449,
                            "temp": {
                                "day": 86.56,
                                "min": 76.39,
                                "max": 88.27,
                                "night": 76.48,
                                "eve": 83.21,
                                "morn": 76.69
                            },
                            "feels_like": {
                                "day": 96.46,
                                "night": 78.3,
                                "eve": 92.19,
                                "morn": 78.39
                            },
                            "pressure": 1010,
                            "humidity": 70,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.83,
                            "deg": 206,
                            "gust": 7.23,
                            "clouds": 89,
                            "pop": 1,
                            "rain": 17.58
                        },
                        {
                            "dt": 1662692400,
                            "sunrise": 1662673457,
                            "sunset": 1662717802,
                            "temp": {
                                "day": 86.92,
                                "min": 75.96,
                                "max": 89.31,
                                "night": 76.62,
                                "eve": 85.12,
                                "morn": 75.96
                            },
                            "feels_like": {
                                "day": 96.87,
                                "night": 78.21,
                                "eve": 96.26,
                                "morn": 77.67
                            },
                            "pressure": 1010,
                            "humidity": 69,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.17,
                            "deg": 346,
                            "gust": 7.36,
                            "clouds": 35,
                            "pop": 0.81,
                            "rain": 3.77
                        },
                        {
                            "dt": 1662778800,
                            "sunrise": 1662759861,
                            "sunset": 1662804155,
                            "temp": {
                                "day": 86.2,
                                "min": 74.95,
                                "max": 87.82,
                                "night": 77.23,
                                "eve": 83.32,
                                "morn": 74.95
                            },
                            "feels_like": {
                                "day": 96.01,
                                "night": 78.93,
                                "eve": 93.16,
                                "morn": 76.51
                            },
                            "pressure": 1009,
                            "humidity": 71,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.18,
                            "deg": 246,
                            "gust": 5.53,
                            "clouds": 83,
                            "pop": 0.94,
                            "rain": 17.15
                        },
                        {
                            "dt": 1662865200,
                            "sunrise": 1662846265,
                            "sunset": 1662890508,
                            "temp": {
                                "day": 85.53,
                                "min": 75.61,
                                "max": 86.02,
                                "night": 76.32,
                                "eve": 81.86,
                                "morn": 75.61
                            },
                            "feels_like": {
                                "day": 95.63,
                                "night": 78.03,
                                "eve": 90.25,
                                "morn": 77.34
                            },
                            "pressure": 1008,
                            "humidity": 74,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.03,
                            "deg": 240,
                            "gust": 8.59,
                            "clouds": 37,
                            "pop": 1,
                            "rain": 24.63
                        },
                        {
                            "dt": 1662951600,
                            "sunrise": 1662932669,
                            "sunset": 1662976861,
                            "temp": {
                                "day": 84.2,
                                "min": 74.66,
                                "max": 85.14,
                                "night": 76.73,
                                "eve": 81.84,
                                "morn": 74.66
                            },
                            "feels_like": {
                                "day": 93.38,
                                "night": 78.53,
                                "eve": 89.92,
                                "morn": 76.3
                            },
                            "pressure": 1007,
                            "humidity": 77,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.97,
                            "deg": 136,
                            "gust": 7.65,
                            "clouds": 42,
                            "pop": 1,
                            "rain": 17.71
                        },
                        {
                            "dt": 1663038000,
                            "sunrise": 1663019073,
                            "sunset": 1663063213,
                            "temp": {
                                "day": 83.91,
                                "min": 75.06,
                                "max": 83.91,
                                "night": 76.42,
                                "eve": 80.96,
                                "morn": 75.06
                            },
                            "feels_like": {
                                "day": 94.12,
                                "night": 78.1,
                                "eve": 87.94,
                                "morn": 76.68
                            },
                            "pressure": 1007,
                            "humidity": 81,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 11.56,
                            "deg": 194,
                            "gust": 14.32,
                            "clouds": 58,
                            "pop": 1,
                            "rain": 21.8
                        }
                    ]
                });
            } catch (error) {
                console.log("error", error);
                setData({
                    "city": {
                        "id": 1721906,
                        "name": "Cabanatuan City",
                        "coord": {
                            "lon": 120.9684,
                            "lat": 15.4905
                        },
                        "country": "PH",
                        "population": 220250,
                        "timezone": 28800
                    },
                    "cod": "200",
                    "message": 9.0856155,
                    "cnt": 16,
                    "list": [
                        {
                            "dt": 1661742000,
                            "sunrise": 1661722999,
                            "sunset": 1661767894,
                            "temp": {
                                "day": 88.03,
                                "min": 75,
                                "max": 89.56,
                                "night": 77.58,
                                "eve": 80.08,
                                "morn": 75
                            },
                            "feels_like": {
                                "day": 99.21,
                                "night": 79.27,
                                "eve": 85.86,
                                "morn": 76.53
                            },
                            "pressure": 1010,
                            "humidity": 68,
                            "weather": [
                                {
                                    "id": 502,
                                    "main": "Rain",
                                    "description": "heavy intensity rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.86,
                            "deg": 31,
                            "gust": 8.63,
                            "clouds": 20,
                            "pop": 1,
                            "rain": 10.17
                        },
                        {
                            "dt": 1661828400,
                            "sunrise": 1661809405,
                            "sunset": 1661854252,
                            "temp": {
                                "day": 87.76,
                                "min": 75.51,
                                "max": 89.71,
                                "night": 77.88,
                                "eve": 80.67,
                                "morn": 75.51
                            },
                            "feels_like": {
                                "day": 99.05,
                                "night": 79.65,
                                "eve": 86.77,
                                "morn": 77.18
                            },
                            "pressure": 1008,
                            "humidity": 69,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.1,
                            "deg": 263,
                            "gust": 7.74,
                            "clouds": 76,
                            "pop": 1,
                            "rain": 13.14
                        },
                        {
                            "dt": 1661914800,
                            "sunrise": 1661895812,
                            "sunset": 1661940608,
                            "temp": {
                                "day": 86.94,
                                "min": 75.33,
                                "max": 89.19,
                                "night": 77.09,
                                "eve": 81.73,
                                "morn": 75.33
                            },
                            "feels_like": {
                                "day": 96.44,
                                "night": 78.93,
                                "eve": 89.11,
                                "morn": 77.02
                            },
                            "pressure": 1007,
                            "humidity": 68,
                            "weather": [
                                {
                                    "id": 502,
                                    "main": "Rain",
                                    "description": "heavy intensity rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 8.25,
                            "deg": 175,
                            "gust": 14.63,
                            "clouds": 63,
                            "pop": 1,
                            "rain": 21.3
                        },
                        {
                            "dt": 1662001200,
                            "sunrise": 1661982218,
                            "sunset": 1662026965,
                            "temp": {
                                "day": 85.87,
                                "min": 75.27,
                                "max": 86.88,
                                "night": 77.14,
                                "eve": 80.69,
                                "morn": 75.27
                            },
                            "feels_like": {
                                "day": 95.63,
                                "night": 78.84,
                                "eve": 86.63,
                                "morn": 76.96
                            },
                            "pressure": 1008,
                            "humidity": 72,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.4,
                            "deg": 27,
                            "gust": 9.89,
                            "clouds": 98,
                            "pop": 0.96,
                            "rain": 17.82
                        },
                        {
                            "dt": 1662087600,
                            "sunrise": 1662068623,
                            "sunset": 1662113321,
                            "temp": {
                                "day": 85.37,
                                "min": 75.42,
                                "max": 86.47,
                                "night": 77.16,
                                "eve": 80.51,
                                "morn": 75.42
                            },
                            "feels_like": {
                                "day": 95.22,
                                "night": 78.94,
                                "eve": 86.34,
                                "morn": 77.07
                            },
                            "pressure": 1008,
                            "humidity": 74,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.96,
                            "deg": 296,
                            "gust": 11.86,
                            "clouds": 100,
                            "pop": 0.62,
                            "rain": 10.82
                        },
                        {
                            "dt": 1662174000,
                            "sunrise": 1662155029,
                            "sunset": 1662199676,
                            "temp": {
                                "day": 85.75,
                                "min": 75.04,
                                "max": 85.84,
                                "night": 76.05,
                                "eve": 81.32,
                                "morn": 75.04
                            },
                            "feels_like": {
                                "day": 95.31,
                                "night": 77.72,
                                "eve": 88.27,
                                "morn": 76.71
                            },
                            "pressure": 1006,
                            "humidity": 72,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 8.9,
                            "deg": 308,
                            "gust": 13.29,
                            "clouds": 100,
                            "pop": 0.7,
                            "rain": 9.01
                        },
                        {
                            "dt": 1662260400,
                            "sunrise": 1662241434,
                            "sunset": 1662286032,
                            "temp": {
                                "day": 82.76,
                                "min": 74.89,
                                "max": 82.76,
                                "night": 74.89,
                                "eve": 75.43,
                                "morn": 76.05
                            },
                            "feels_like": {
                                "day": 90.39,
                                "night": 76.46,
                                "eve": 77.09,
                                "morn": 77.72
                            },
                            "pressure": 1006,
                            "humidity": 79,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 6.85,
                            "deg": 324,
                            "gust": 11.41,
                            "clouds": 100,
                            "pop": 0.78,
                            "rain": 5.12
                        },
                        {
                            "dt": 1662346800,
                            "sunrise": 1662327839,
                            "sunset": 1662372386,
                            "temp": {
                                "day": 83.05,
                                "min": 74.61,
                                "max": 83.05,
                                "night": 75.31,
                                "eve": 77.31,
                                "morn": 74.62
                            },
                            "feels_like": {
                                "day": 90.81,
                                "night": 76.91,
                                "eve": 79.02,
                                "morn": 76.15
                            },
                            "pressure": 1007,
                            "humidity": 78,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 12.03,
                            "deg": 211,
                            "gust": 16.82,
                            "clouds": 99,
                            "pop": 0.83,
                            "rain": 4.72
                        },
                        {
                            "dt": 1662433200,
                            "sunrise": 1662414244,
                            "sunset": 1662458741,
                            "temp": {
                                "day": 86.07,
                                "min": 74.25,
                                "max": 88.43,
                                "night": 76.77,
                                "eve": 85.08,
                                "morn": 74.26
                            },
                            "feels_like": {
                                "day": 95.68,
                                "night": 78.46,
                                "eve": 96.6,
                                "morn": 75.85
                            },
                            "pressure": 1010,
                            "humidity": 71,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.95,
                            "deg": 204,
                            "gust": 8.3,
                            "clouds": 100,
                            "pop": 0.56,
                            "rain": 2.53
                        },
                        {
                            "dt": 1662519600,
                            "sunrise": 1662500648,
                            "sunset": 1662545095,
                            "temp": {
                                "day": 86.23,
                                "min": 75.83,
                                "max": 86.23,
                                "night": 78.15,
                                "eve": 83.97,
                                "morn": 75.83
                            },
                            "feels_like": {
                                "day": 95.65,
                                "night": 79.84,
                                "eve": 94.26,
                                "morn": 77.49
                            },
                            "pressure": 1012,
                            "humidity": 70,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.21,
                            "deg": 174,
                            "gust": 4.59,
                            "clouds": 99,
                            "pop": 0.68,
                            "rain": 0.82
                        },
                        {
                            "dt": 1662606000,
                            "sunrise": 1662587053,
                            "sunset": 1662631449,
                            "temp": {
                                "day": 86.56,
                                "min": 76.39,
                                "max": 88.27,
                                "night": 76.48,
                                "eve": 83.21,
                                "morn": 76.69
                            },
                            "feels_like": {
                                "day": 96.46,
                                "night": 78.3,
                                "eve": 92.19,
                                "morn": 78.39
                            },
                            "pressure": 1010,
                            "humidity": 70,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.83,
                            "deg": 206,
                            "gust": 7.23,
                            "clouds": 89,
                            "pop": 1,
                            "rain": 17.58
                        },
                        {
                            "dt": 1662692400,
                            "sunrise": 1662673457,
                            "sunset": 1662717802,
                            "temp": {
                                "day": 86.92,
                                "min": 75.96,
                                "max": 89.31,
                                "night": 76.62,
                                "eve": 85.12,
                                "morn": 75.96
                            },
                            "feels_like": {
                                "day": 96.87,
                                "night": 78.21,
                                "eve": 96.26,
                                "morn": 77.67
                            },
                            "pressure": 1010,
                            "humidity": 69,
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 5.17,
                            "deg": 346,
                            "gust": 7.36,
                            "clouds": 35,
                            "pop": 0.81,
                            "rain": 3.77
                        },
                        {
                            "dt": 1662778800,
                            "sunrise": 1662759861,
                            "sunset": 1662804155,
                            "temp": {
                                "day": 86.2,
                                "min": 74.95,
                                "max": 87.82,
                                "night": 77.23,
                                "eve": 83.32,
                                "morn": 74.95
                            },
                            "feels_like": {
                                "day": 96.01,
                                "night": 78.93,
                                "eve": 93.16,
                                "morn": 76.51
                            },
                            "pressure": 1009,
                            "humidity": 71,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.18,
                            "deg": 246,
                            "gust": 5.53,
                            "clouds": 83,
                            "pop": 0.94,
                            "rain": 17.15
                        },
                        {
                            "dt": 1662865200,
                            "sunrise": 1662846265,
                            "sunset": 1662890508,
                            "temp": {
                                "day": 85.53,
                                "min": 75.61,
                                "max": 86.02,
                                "night": 76.32,
                                "eve": 81.86,
                                "morn": 75.61
                            },
                            "feels_like": {
                                "day": 95.63,
                                "night": 78.03,
                                "eve": 90.25,
                                "morn": 77.34
                            },
                            "pressure": 1008,
                            "humidity": 74,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.03,
                            "deg": 240,
                            "gust": 8.59,
                            "clouds": 37,
                            "pop": 1,
                            "rain": 24.63
                        },
                        {
                            "dt": 1662951600,
                            "sunrise": 1662932669,
                            "sunset": 1662976861,
                            "temp": {
                                "day": 84.2,
                                "min": 74.66,
                                "max": 85.14,
                                "night": 76.73,
                                "eve": 81.84,
                                "morn": 74.66
                            },
                            "feels_like": {
                                "day": 93.38,
                                "night": 78.53,
                                "eve": 89.92,
                                "morn": 76.3
                            },
                            "pressure": 1007,
                            "humidity": 77,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 4.97,
                            "deg": 136,
                            "gust": 7.65,
                            "clouds": 42,
                            "pop": 1,
                            "rain": 17.71
                        },
                        {
                            "dt": 1663038000,
                            "sunrise": 1663019073,
                            "sunset": 1663063213,
                            "temp": {
                                "day": 83.91,
                                "min": 75.06,
                                "max": 83.91,
                                "night": 76.42,
                                "eve": 80.96,
                                "morn": 75.06
                            },
                            "feels_like": {
                                "day": 94.12,
                                "night": 78.1,
                                "eve": 87.94,
                                "morn": 76.68
                            },
                            "pressure": 1007,
                            "humidity": 81,
                            "weather": [
                                {
                                    "id": 501,
                                    "main": "Rain",
                                    "description": "moderate rain",
                                    "icon": "10d"
                                }
                            ],
                            "speed": 11.56,
                            "deg": 194,
                            "gust": 14.32,
                            "clouds": 58,
                            "pop": 1,
                            "rain": 21.8
                        }
                    ]
                });
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
            <Box
                sx={style.box}
            >
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
