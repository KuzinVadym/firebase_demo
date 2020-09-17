import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main: {
        margin: '25px'
    },
    item: {
        width: '285px'
    },
    textField: {
        width: '100%'
    },
    createButton: {
        color: 'white',
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    }
}));

export default useStyles;