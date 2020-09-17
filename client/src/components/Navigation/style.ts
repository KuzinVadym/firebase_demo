import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
    },
    routesItem: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.primary.dark
        },
    },
    userItem: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        boxShadow: 'none',
        color: theme.palette.secondary.main,
        borderRadius: 0,
        '&:hover': {
            color: theme.palette.primary.dark,
        },
        margin: '25px'
    }
}));

export default useStyles;