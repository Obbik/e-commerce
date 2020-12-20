import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        height: "100%",
    },
    media: {
        backgroundSize: "200px",
        height: "100px",
        paddingTop: '56.25%', // 16:9,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    cardTitle: {
        '&::first-letter': {
            textTransform: "uppercase",
        }
    }
}));