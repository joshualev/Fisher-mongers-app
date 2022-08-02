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


const Cart = ( { fishList }) => {
  return (
    <>
    <Container align="center" sx={{mt:3}}>
        <Grid sx={{width:'320px'}}>
        <CardActionArea>
            <Card sx={{ display: 'flex' }}>
            <CardContent >
                <Typography component="h2" variant="h5">
                Fish name
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                Price
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 160, display: 'block', p:1 }}
                image='https://res.cloudinary.com/dpk0o7ztt/image/upload/v1659393111/snapper_fillet_qraorh.jpg'
                alt="alt"
            />
            </Card>
        </CardActionArea>
        </Grid>

        <Grid sx={{m:2}} >
            <Typography sx={{mb:2}}>
                Total:
            </Typography>
            <Link to='/checkout' style={{textDecoration:'none'}}>
                <Button variant="contained" size="large">Proceed to Payment</Button>
            </Link>
        </Grid>
    </Container>
    </>
    )
}

export default Cart