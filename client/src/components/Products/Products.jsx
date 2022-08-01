import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product/Product'
const products = [
    {id:1, name:'Shoes', description:'Running shoes', image: "https://placedog.net/500", price:"$5"},
    {id:2, name:'Shirt', description:'T-shirt', image: "https://placedog.net/502", price:"$25"},
    {id:3, name:'Jeans', description:'Skinny-fit jeans', image: "https://placedog.net/504", price:"$35"},
    {id:4, name:'Socks', description:'2 socks', image: "https://placedog.net/506", price:"$7"},
]

const Products = () => {
  return (
      <main>
        <Grid sx={{p:10}}
        container 
        justify="center" 
        spacing={4}>
            {products.map((product) => {
                return(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
                )
            })}
        </Grid>
      </main>
  )
}

export default Products