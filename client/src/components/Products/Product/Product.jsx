import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Product = ( { product } ) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
        <CardMedia sx={{height: 0, paddingTop: '56.25%', }} image={product.image} title={product.name}/>
        <CardContent sx={{justifyContent: 'space-between', display:'flex'}}>
            <Box sx ={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {product.price}
            </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{display: 'flex',
        justifyContent: 'flex-end'}}>
            <IconButton aria-label="Add to Cart">
                < ShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product