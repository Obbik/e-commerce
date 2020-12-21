import React from 'react'
import {Container,Typography} from "@material-ui/core"
import useStyles from "./styles"
const Bottom = () => {
    const classes = useStyles()
    return (
        <div>
        <Container maxWidth="lg">
            {console.log("test")}
            <Typography className={classes.text}>
                TESTSdas
            </Typography>
        </Container>
        </div>
    )
}

export default Bottom
