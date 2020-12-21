import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    footer: {
        backgroundColor: "#f4f4f4",
        flexGrow: 1,
        paddingTop: theme.spacing(2)
    },
    footerContainer:{
        justifyContent:"center",
        display:"flex",
        flexDirection:"row",
        padding:"2rem"
    },
    footerElements:{
        marginLeft:"1rem",
    }



}));