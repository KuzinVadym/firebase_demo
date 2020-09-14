import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffab40',
            main: '#ff6d00',
            dark: '#e65100',
        },
        secondary: {
            light: '#9e9e9e',
            main: '#616161',
            dark: '#212121',
        },
        background: {
            default: '#f5f5f5',
        },
        error: {
            light: '#ff6e40',
            main: '#ff3d00',
            dark: '#dd2c00',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});

export default theme;