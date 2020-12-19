import React from 'react'
import {Grid, Container} from '@material-ui/core'
import Product from "./Product/Product"

import useStyles from "./styles"



const Products = ({products,onAddToCard}) =>{
    const classes = useStyles()
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Container className={classes.container}>
            <Grid container justify="center" spacing={4} className={classes.grid}>
                {products.map((product)=>(
                <Grid item key={product.id}  xs={6}>    
                    <Product product={product} onAddToCard={onAddToCard}/>
                </Grid>
                ))}
            </Grid>
        </Container>
    </main>
    )
}
export default Products