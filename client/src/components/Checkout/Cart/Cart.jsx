import { Link } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CardActionArea from '@mui/material/CardActionArea';

const CartItem = ({ fish, quantity }) => {

    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardContent >
                    <Typography component="h2" variant="h5">
                        { fish.species }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        ${ fish.price }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        In cart: {quantity}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: 'block', p: 1 }}
                    image={ fish.imageURL }
                    alt="alt"
                />
            </Card>
        </div>
    )
}

const Cart = ({ cart, cartTotal }) => {
    let emptyCart = ""
    if (cart.length === 0) {
        emptyCart = "There is nothing in your cart yet"
    }

    const cartList = cart.map((i) => {
        return (
            <CartItem
                key={i._id}
                fish={i.f}
                quantity={i.q}
            />
        )
    })

    return (
        <>
            <Container align="center" sx={{ mt: 3 }}>
                <Grid sx={{ width: '320px' }}>
                    <CardActionArea component="a" href="#">
                        <h3>{emptyCart}</h3>
                        {cartList}
                    </CardActionArea>
                </Grid>

                <Grid sx={{ m: 2 }} >
                    <Typography sx={{ mb: 2 }}>
                        Total: ${cartTotal}
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