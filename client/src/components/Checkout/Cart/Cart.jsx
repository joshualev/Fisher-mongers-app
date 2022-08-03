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

const Cart = ({ fishList, cart }) => {
    // const dummyCart = [
    //     { '62e856b9c97e3f6ee496084f': 2 },
    //     { '62e856b9c97e3f6ee4960853': 1 },
    //     { '62e856b9c97e3f6ee4960856': 3 }
    // ]

    const cartList = cart.map((i) => {
        return (
            <CartItem
                key={Object.keys(i).toString()}
                fish={i.f}
                quantity={i.q}
            />
        )
    })

    const cartTotal = () => {
        let total = 0
        for ( let item of cart ) {
            let price = fishList.find((f) => f._id)
            let amount = parseInt(Object.values(item).toString())

        }
    }
    cartTotal()

    return (
        <>
            <Container align="center" sx={{ mt: 3 }}>
                <Grid sx={{ width: '320px' }}>
                    <CardActionArea component="a" href="#">
                        {/* cartList goes here */}
                        {cartList}
                    </CardActionArea>
                </Grid>

                <Grid sx={{ m: 2 }} >
                    <Typography sx={{ mb: 2 }}>
                        Total:
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