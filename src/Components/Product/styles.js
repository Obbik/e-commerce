import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,

    content: {
        backgroundColor:"#f3f3f3",
        flexGrow: 1,
        paddingTop: theme.spacing(2)
    },
    root: {
        flexGrow: 1,
    },
    container: {
        width: "700px"
    },
   
}));