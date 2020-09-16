import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader/root';

import theme from '../../styles';
import useStyles from "./style";
import Routes from "../../routes";

const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
};

export default hot(App);