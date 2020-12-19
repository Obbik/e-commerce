import React from 'react'
import useStyles from './styles'
import CardItem from "./CardItem/CardItem"
import {Typography, Container, Grid } from "@material-ui/core"


const Cart = ({cartItems, onfetchCart, deleteItem}) => {
    console.log(cartItems)
    const classes = useStyles()
    if(!cartItems.line_items) return 'Loading ......'
    return (
       <Container>
            <div className={classes.toolbar}/> 
            <Typography>
                test
            </Typography>
            <Container className={classes.container}>
            <Grid container justify="center" spacing={4} className={classes.grid}>
                { cartItems.line_items.map((cartItem)=>(
                <Grid item key={cartItem.id}  xs={12}>    
                    <CardItem  data={cartItem} onfetchCart={onfetchCart} onDeleteItem={deleteItem}/>
                </Grid> 
                 ))} 
             </Grid>
        </Container>
    </Container>
    )
}

export default Cart
