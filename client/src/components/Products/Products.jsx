import React from 'react'
import Grid from '@mui/material/Grid';
import Product from './Product/Product'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhishingIcon from '@mui/icons-material/Phishing';
import Badge from '@mui/material/Badge'
import { useState, useEffect } from "react"
const Products = ({ fishList, addToCart, removeFromCart }) => {
    
    return (
        <>
            <main>
                {/* Hero unit */}
                <Container
                    disableGutters
                    maxWidth="md"
                    sx={{ pt: 3, pb: 6, justifyContent: 'center' }}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        <Badge
                            badgeContent={<PhishingIcon sx={{ mt: 1.2, mr: 1 }} />} >
                            <Typography
                                variant="h2"
                            >
                                Hooked
                            </Typography>
                        </Badge>
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="text.secondary"
                        component="p">
                        A collection of local, sustainable seafood
                    </Typography>
                </Container>
                {/* End hero unit */}
                <Grid sx={{ p: 10 }}
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