import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,

    content: {
      
        backgroundColor: "#f3f3f3",
        flexGrow: 1,
        paddingTop: theme.spacing(2)
    },
    middleSelect: {
        justifyContent: "center",
        display: "flex",
        align: "center",
        marginTop: "20px",
        marginBottom: "20px"
    },
    MiddleTestHeader: {
        color: "#E3BE87",
    },
    middleText: {
        marginLeft: "10px",
        fontSize: "20px",
        variant: "h1",
        '&:hover': {
            fontWeight: "600",
            cursor: "pointer"
        }
    },

    root: {
        flexGrow: 1,
    },
    container: {
        maxwidth: "1200px",

    },
    goToShop: {
        fontFamily:"'Lato', sans-serif;",
        fontSize:"17px",
        marginTop: "2rem",
        textDecoration: "underline",
        cursor: "pointer",
        marginBottom:"0",
    }



}));