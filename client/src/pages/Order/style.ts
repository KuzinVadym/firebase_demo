import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        padding: '25px',
        width: '20%'
    },
    item: {
        width: '100%',
        margin: '5px'
    },
    textField: {
        width: '100%',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${theme.palette.secondary.light}`
    },
    nestedItem: {
        paddingLeft: theme.spacing(4)
    },
    submitItem: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    switchButton: {
        color: 'white',
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

export default useStyles;