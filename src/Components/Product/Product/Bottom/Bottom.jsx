import React from 'react'
import {Container,Typography, Divider, Link } from "@material-ui/core"
import useStyles from "./styles"
const Bottom = () => {

    const footerText = ["About us", "Policy", "Term", "Contact"]
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Divider light />
            <Container maxWidth="lg" align="center" className={classes.footerContainer}> 
            {console.log("test")}
            <Typography className={classes.text}>
                @ 2020 All Right Reserved
            </Typography>
            {footerText.map((element)=>(
                <Typography className={classes.footerElements} key={element}>
                    <Link>
                    {element}
                    </Link>
                </Typography> 
            ))}

        </Container>

        </footer>
    )
}

export default Bottom
