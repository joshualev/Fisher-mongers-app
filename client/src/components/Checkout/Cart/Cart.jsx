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
            <CardMedia
                component="img"
                sx={{
                    borderRadius: 2, width: 180, height: 120, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                image={fish.imageURL}
                alt="alt"
            />
            <CardContent sx={{ mt: -1 }}>
                <Typography component="h2" variant="h5">
                    {fish.species}
                    <Typography variant="subtitle1" color="text.secondary">
                        ${(fish.price * fish.cartQuantity).toFixed(2)}
                    </Typography>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    In cart: {fish.cartQuantity}
                </Typography>
                <div>
                    <Button onClick={handleClick} name="remove" sx={{ borderRadius: 2, mt: 1, width: 180 }} variant="outlined" color="error" >REMOVE</Button>
                </div>
            </CardContent>
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
                <Typography component="h1" variant="h4">
                    Cart
                </Typography>
                <Card sx={{ display: 'flex', justifyContent: 'space-evenly', pb: 3, flexDirection: 'column', width: 300, borderRadius: 2 }}>
                    <h3>{emptyCart}</h3>
                    {cartList}
                </Card>
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