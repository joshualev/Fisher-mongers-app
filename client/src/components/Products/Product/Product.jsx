import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Product = ( {fish} ) => {
  return (
    <>
    <Card key={fish._id} sx={{ maxWidth: '100%' }}>
        {/* <div style={{ position: "relative" }}> */}
        <CardMedia sx={{height: 0, paddingTop: '56.25%', }} image={fish.imageURL} title={fish.species}/>
            {/* <div style={{position:"absolute", color:"white", top:10, left: "20%", transform:"translateX(-50%)",}}>        
                <Typography variant="body2" sx={{color: palette.common.white}} >
                    Caught by {fish.caughtBy}
                </Typography>
            </div>
        </div> */}
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
        justifyContent: 'center'}}>
            <Card sx={{mb:1}}>
                <Button  sx={{pt:1, pb:1}} variant="contained" size="medium" color="primary">-</Button>
                <Typography variant="p" sx={{p:2}}>
                    6
                </Typography>
                <Button sx={{pt:1, pb:1}} variant="contained"  size="medium" color="primary">+</Button>
                <div>
                <Button sx={{mt:1, width:'100%'}} variant="contained" color="warning">Add to cart</Button>
                </div>
            </Card>
        </CardActions>
    </Card>
    </>
  )
}

export default Product