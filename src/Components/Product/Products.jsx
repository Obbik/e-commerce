import React from 'react'
import {Grid, Container, Typography} from '@material-ui/core'
import Product from "./Product/Product"

import useStyles from "./styles"



const Products = ({products,onAddToCard}) =>{
    const classes = useStyles()
    const searchProduct = ["All","Shampoo","Hair Shampoo","Oil"]
    return(
    <main className={classes.content} >
        <div className={classes.toolbar}/>
            <Typography align="center" variant="h2">
                <span className={classes.MiddleTestHeader}>Best Collection </span> From Your Store <br/>
                That You Dont Want To Miss
            </Typography>
            <div align="center" className={classes.middleSelect}>
            {searchProduct.map((Product)=>(
                <Typography key={Product} className={classes.middleText} variant="body1">
                {Product}
                </Typography >
            ))}
            </div>
        <Container className={classes.container}>
            <Grid container justify="center" spacing={4} className={classes.grid}>
                {products.map((product)=>(
                <Grid item key={product.id}  xs={4}>    
                    <Product product={product} onAddToCard={onAddToCard}/>
                </Grid>
                ))}
            </Grid>
        </Container>



    </main>
    )
}
export default Products