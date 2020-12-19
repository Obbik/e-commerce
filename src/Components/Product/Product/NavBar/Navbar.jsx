import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core"
import {ShoppingCart} from "@material-ui/icons"
import {Link, useLocation} from "react-router-dom"
import logo from "../../../../assets/commerce.png"
import useStyles from "./styles"




const Navbar = ({itemsInCard}) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" color="secondary" color="inherit" variant="h6" className={classes.title}>
                        <img src={logo} alt="commerce logo" height="25px" className={classes.image}/>
                        example text
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                    {  location.pathname === "/" && (<IconButton color="inherit" component={Link} to="/cart">
                            <Badge badgeContent={itemsInCard} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>)
                        }
                        
                    </div>

                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar
