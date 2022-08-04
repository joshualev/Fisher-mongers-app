import { Link } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const CartItem = ({ fish, removeFromCart }) => {
    const handleClick = () => {
        removeFromCart(fish)
    }
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <Grid container>
                <CardContent >
                    <Typography component="h2" variant="h5">
                        { fish.species }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        ${(fish.price * fish.cartQuantity).toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        In cart: {fish.cartQuantity}
                    </Typography>
                    <div>
                        <Button onClick={handleClick} name="remove" sx={{ mt: 1, width: '100%' }} variant="outlined" color="error" >REMOVE</Button>
                    </div>
                </CardContent>
                </Grid>
                <Grid item >
                <CardMedia
                    component="img"
                    sx={{ width: 160, height: '100%',display: 'block', p: 1 }}
                    image={ fish.imageURL }
                    alt="alt"
                />
                </Grid>
            </Card> 
        </div>
    )
}

const Cart = ({ cart, removeFromCart }) => {
    let emptyCart = ""
    if (cart.items.length === 0) {
        emptyCart = "There is nothing in your cart yet"
    }

    const cartList = cart.items.map((i) => {
        
        return (
            <CartItem
                key={i._id}
                fish={i}
                removeFromCart={removeFromCart}
            />
        )
    })

    return (
        <>
            <Container align="center" sx={{ mt: 3 }}>
                <Grid sx={{ width: '320px'}}>
                    <Card>
                        <h3>{emptyCart}</h3>
                        {cartList}
                    </Card>
                </Grid>

                <Grid sx={{ m: 2 }} >
                    <Typography sx={{ mb: 2 }}>
                        Total: ${cart.subTotal.toFixed(2)}
                    </Typography>
                    <Link to='/checkout' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large">Proceed to Payment</Button>
                    </Link>
                </Grid>
            </Container>
        </>
    )
}

export default Cart