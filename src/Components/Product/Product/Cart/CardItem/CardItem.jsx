import React,{useState, useEffect} from 'react'
import useStyles from "./style"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {Card, Link, CardContent, CardMedia,Typography, Select, MenuItem, IconButton} from "@material-ui/core"

const CardItem = ({data, onfetchCart, onDeleteItem}) => {
    const classes = useStyles()
 

  const change=e=>{
    onfetchCart(data.id, e.target.value)
    .then(()=>{
        window.location.reload()
    })
  }


    return (
            <Card className={classes.root}>
                <CardMedia image={data.media.source} className={classes.productImage} title="product image"/>
               <div className={classes.infoCard} >
                    <CardContent className={classes.content} >
                        <div className={classes.letters}>
                            <Typography variang={"h1"} className={classes.productTitle}>
                                {data.name}
                            </Typography>
                            <Typography variant={"body2"} className={classes.productPrice}>
                                {data.price.formatted_with_code}
                            </Typography>
                            <Link >
                                <Typography className={classes.more}>
                                    More
                                </Typography>
                            </Link>
                        </div>
                            <div className={classes.rightCard}>
                           
                             <IconButton  className={classes.deleteButton} onClick={()=>onDeleteItem(data.id)}>
                                <HighlightOffIcon />
                            </IconButton>

                            <Select value={data.quantity} onChange={change} className={classes.input}>
                            <MenuItem value={1}>{1}</MenuItem>
                            <MenuItem value={2}>{2}</MenuItem>
                            <MenuItem value={3}>{3}</MenuItem>
                            <MenuItem value={4}>{4}</MenuItem>
                            <MenuItem value={5}>{5}</MenuItem>
                            </Select>
                            <Typography>
                                {data.line_total.formatted_with_symbol}
                            </Typography>
                            
                        </div>
                    </CardContent>
                </div>
                
            </Card>
    
    )
}

export default CardItem
