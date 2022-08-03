import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const Product = ({ fish, addToCart }) => {
  const [counter, setCounter] = useState()

  useEffect(() => {
    setCounter(0)
  }, [])

  const handleClick = (event) => {
    if (event.target.name === "plus" && counter < fish.stock) {
      setCounter(counter + 1)
    } else if (event.target.name === "minus" && counter > 0) {
      setCounter(counter - 1)
    } else if (event.target.name === "add") {
      console.log("Clicked 'Add to cart'");
    }
  }

  const handleAddToCart = () => {
    addToCart(fish, counter)
  }

  return (
    <>
      <Card key={fish._id} sx={{ maxWidth: '100%' }}>
        <Link to={fish._id}>
          <CardMedia sx={{ height: 0, paddingTop: '56.25%', }} image={fish.imageURL} title={fish.species} />
        </Link>
        <CardContent sx={{ justifyContent: 'space-between', display: 'flex' }}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom>
              {fish.species}
            </Typography>
            <Typography variant="p" color="textSecondary" gutterBottom>
              Stock remaining: {fish.stock - counter}
            </Typography>
          </Box>
          <Typography variant="h5" gutterBottom>
            ${fish.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{
          justifyContent: 'center'
        }}>
          <div sx={{ mb: 1 }}>
            <Button
              sx={{ pt: 0.25, pb: 0.25 }}
              variant="outlined"
              size="medium"
              onClick={handleClick}
              name="minus"
              color="primary">-

            </Button>
            <Typography
              variant="p"
              sx={{ p: 2.3 }}>
              {counter}
            </Typography>
            <Button
              sx={{ pt: 0.25, pb: 0.25 }}
              variant="outlined"
              size="medium"
              color="primary"
              onClick={handleClick}
              name="plus">+
            </Button>
            <div>
              <Button
                onClick={handleAddToCart}
                size="large"
                variant="contained"
                color="primary"
                sx={{ my: 1, color: "white" }}
              >
                <ShoppingCartIcon sx={{ mr: 1 }} />
                Add to cart
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </>
  )
}

export default Product