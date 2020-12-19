import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(2)
    },
    container: {
        width: "700px",

    }
}));