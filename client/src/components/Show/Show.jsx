
import * as React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DeleteIcon from "@mui/icons-material/Delete"
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhishingIcon from '@mui/icons-material/Phishing';

const Show = ({ fishList, handleDelete, authorised, addToCart }) => {
  const [counter, setCounter] = useState()
  const params = useParams()
  const fish = fishList.find((f) => f._id === params.fishID)
  // console.log(fish);

  const navigate = useNavigate()

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

  const handleUpdate = () => {
    navigate(`/edit/${fish._id}`)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="sm" component="main" sx={{ textAlign: "left", width: '100%', align: 'center', justifyContent: 'center', pt: 5, pb: 5 }}>
        <Card >
          <CardHeader
            title={fish.species}
            subheader={`$${fish.price}p/kg`}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{
              align: 'center',
            }}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700],
            }}
          />
          <CardContent>
            <CardMedia
              sx={{ height: 0, paddingTop: '56.25%', }}
              image={fish.imageURL}
              title="Fish Species"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'space-around',
                mb: 2,
                mt: 1
              }}
            >
              <Typography variant="body1" color="text.primary">
                {fish.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Caught by: {fish.caughtBy}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock remaining: {fish.stock - counter}
              </Typography>
            </Box>
          </CardContent>
          <CardActions disableSpacing sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Card sx={{ mb: 1 }}>
              <Button onClick={handleClick} name="minus" variant="outlined" size="medium" color="primary">-</Button>
              <Typography variant="p" sx={{ p: 2 }}>
                {counter}
              </Typography>
              <Button onClick={handleClick} name="plus" variant="outlined" size="medium" color="primary">+</Button>
              <div>
                <Button onClick={handleAddToCart} name="add" sx={{ mt: 1, width: '100%' }} variant="contained" color="primary" startIcon={<ShoppingCartIcon />} >Add to cart</Button>
              </div>
            </Card>
            {authorised && <Card sx={{ mb: 1, width: 169 }}>
              <div>
                <Button onClick={handleUpdate} name="update" variant="outlined" size="medium" color="success" sx={{ width: '100%' }} startIcon={<AssignmentIcon />} >Update Item</Button>
              </div>
              <div>
                <Button onClick={() => handleDelete(fish._id)} name="delete" sx={{ mt: 1, width: '100%' }} variant="outlined" color="error" startIcon={<DeleteIcon />} >Delete Item</Button>
              </div>
            </Card>}
          </CardActions>
        </Card>
      </Container>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button variant="outlined" size="large" startIcon={<PhishingIcon/>} >Continue shopping</Button>
      </Link>
    </div>
  )

}

export default Show