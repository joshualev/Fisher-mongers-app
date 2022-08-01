import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';



// <Typography variant="p" color="textSecondary">
// Caught by {fish.caughtBy}
// </Typography>
const Product = ( {fish} ) => {
    console.log(fish)
  return (
    <>
    <Card key={fish._id} sx={{ maxWidth: '100%' }}>
        <CardMedia sx={{height: 0, paddingTop: '56.25%', }} image={fish.imageURL} title={fish.species}/>
        <CardContent sx={{justifyContent: 'space-between', display:'flex'}}>
            <Box sx ={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom>
                {fish.species}
            </Typography>
            <Typography variant="p" color="textSecondary" gutterBottom>
                {fish.stock} left
            </Typography>
            </Box>
            <Typography variant="h5" gutterBottom>
                ${fish.price}
            </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{display: 'flex',
        justifyContent: 'flex-end'}}>
            <IconButton aria-label="Add to Cart">
            < ShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
    </>
  )
}

export default Product