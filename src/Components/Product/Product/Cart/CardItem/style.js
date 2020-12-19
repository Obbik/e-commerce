import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {

        display: "flex",
        height: "100%"
    },
    productImage: {
        padding: "10px 10px 10px 10px",
        width: "30%",
        backgroundSize: "150px"
    },
    content: {
        display: "flex",
        flex: '1 0 auto',
        justifyContent: "space-between"

    },
    input: { marginBottom: "20px" },
    deleteButton: {
        marginBottom: "20px"
    },
    infoCard: {
        display: "flex",
        width: "80%",

    },
    rightCard: {
        display: "flex",
        flexDirection: "column"
    },
    productTitle: {
        '&::first-letter': {
            textTransform: "uppercase",
        },
        fontWeight: "700",
        fontSize: "20px",

    },
    more: {
        marginTop: "10px"
    },
    productPrice: {

    },
    letters: {
        marginTop: theme.spacing(3)
    },
    grow: {
        flexGrow: "1"
    }
}));