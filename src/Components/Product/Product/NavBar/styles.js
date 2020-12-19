import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
    },
    image: {
        marginRight: '10px',
    },
    // menuButton: {
    //     // marginRight: theme.spacing(2),
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'none',
    //     },
    // },
    grow: {
        flexGrow: 1,
    },

}));