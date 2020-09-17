import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        display: 'inline-block',
        padding: '5px'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5px',
        border: `1px solid ${theme.palette.secondary.light}`,
        userSelect: 'none'
    },
    title: {
        display: 'flex',
        width: '90%',
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    bookingDate: {
        color: theme.palette.secondary.light
    }
}));

export default useStyles;