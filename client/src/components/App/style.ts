import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(_theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
    }
}));

export default useStyles;