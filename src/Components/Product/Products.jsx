import React from 'react'
import {Grid, Container, Typography, Button , ButtonGroup, TextField} from '@material-ui/core'
import Product from "./Product/Product"
import useStyles from "./styles"

const Products = ({products,onAddToCard}) =>{

    
    const classes = useStyles()
    const searchProduct = ["All","Shampoo","Hair Shampoo","Oil"]
    return(
    <main className={classes.content} >
        <div className={classes.toolbar}/>
           {/* <Container maxWidth="m" className={classes.headerContainer}> */}
            <Typography align="center" variant="h3" > 
                <span className={classes.MiddleTestHeader}>Best Collection <br /> </span> From Your Store 
                That You Dont Want To Miss
            </Typography>
            <div align="center" className={classes.middleSelect}>
            {searchProduct.map((Product)=>(
                <Typography key={Product} className={classes.middleText} variant="body1">
                {Product}
                </Typography >
            ))}
            </div>
           {/* </Container> */}
        <Container className={classes.container}>
            <Grid container justify="center" spacing={4} className={classes.grid}>
                {products.map((product)=>(
                <Grid item key={product.id}  xs={12} md={4}>    
                    <Product product={product} onAddToCard={onAddToCard}/>
                </Grid>
                ))}
            </Grid>
        </Container>
       
        <Typography align="center" className={classes.goToShop} variant="body2" gutterBottom="true">
            Go to shop
        </Typography>
    </main>
    )
}
export default Products