import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product/Product'


const Products = ({fishList}) => {
    console.log(fishList)
  return (
      <>
      <main>
        <Grid sx={{p:10}}
        container 
        justify="center" 
        spacing={4}>
            {fishList.map((fish) => {
                return(
                <Grid item key={fish._id} xs={12} sm={6} md={4} lg={3}>
                    <Product fish={fish}/>
                </Grid>
                )
            })}
        </Grid>
      </main>
      </>
  )
}

export default Products