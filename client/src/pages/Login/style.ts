import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: '45%',
        minHeight: '400px'
    },
    body: {
        height: '100%',
        minHeight: '400px'
    },
    inputItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '200px'
    },
    textField: {
        width: '75%',
        margin: '25px'
    },
    authButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loginButton: {
        color: 'white',
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        margin: '25px'
    },
    logoutButton: {
        color: 'white',
        boxShadow: 'none',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
        margin: '25px'
    }
}));

export default useStyles;