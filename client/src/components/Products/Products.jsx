import React from 'react'
import Logo from '../../hooked.svg'
import Grid from '@mui/material/Grid';
import Product from './Product/Product'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhishingIcon from '@mui/icons-material/Phishing';
import Badge from '@mui/material/Badge'
import Searchbar from '../Navbar/Searchbar'
import CardMedia from '@mui/material/CardMedia'
import { useState, useEffect } from "react"
import Card from '@mui/material/Card'
const Products = ({ fishList, addToCart, removeFromCart }) => {
    
    return (
        <>
            <main>
                {/* Hero unit */}
                <Container 
                    disableGutters
                    maxWidth="md" 
                    sx={{ justifyContent: 'center' }}
                >
                    <Grid sx={{mt:-12}}>
                     <CardMedia
                        image={Logo}
                        sx={{ 
                            height: 0,
                            paddingTop: '56.25%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }} 
                       
                     />
                      </Grid>
                    <Typography
                        sx={{mt:-3}}
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        component="p">
                        A collection of locally caught, sustainable seafood
                    </Typography>
                    {/* </Grid> */}
                </Container>
                {/* End hero unit */}
                <Grid sx={{ p: 8 }}
                    container
                    justify="center"
                    spacing={4}>
                    {fishList.map((fish) => {
                        return (
                            <Grid item key={fish._id} xs={12} sm={6} md={4} lg={3}>
                                <Product 
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart} 
                                    fish={fish} 
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </main>

        </>
    )
}

export default Products