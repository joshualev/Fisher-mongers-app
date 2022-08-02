
import * as React from 'react';
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Show = ({ fishList }) => {
  const [counter, setCounter] = useState()
  const params = useParams()
  const fish = fishList.find((f) => f._id === params.fishID)

  useEffect(() => {
    setCounter(0)
  }, [])

  const handleClick = (event) => {
    if (event.target.name === "plus" && counter < fish.stock ) {
      setCounter(counter + 1)
    } else if (event.target.name === "minus" && counter > 0) {
      setCounter(counter - 1)
    } else if (event.target.name === "add") {
      console.log("Clicked 'Add to cart'");
    }
  }

  return (
    <div>
      {/* Hero unit */}
      {/* <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {fish.species}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          {fish.description}
        </Typography>
      </Container> */}
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{ width: '50%', align: 'center', justifyContent: 'center' }}>
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
              image={ fish.imageURL }
              title="Fish Species"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'space-around',
                mb: 2,
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
            justifyContent: 'center'
          }}>
            <Card sx={{ mb: 1 }}>
              <Button onClick={handleClick} name="minus" sx={{ pt: 1, pb: 1 }} variant="outlined" size="medium" color="primary">-</Button>
              <Typography variant="p" sx={{ p: 2 }}>
                {counter}
              </Typography>
              <Button onClick={handleClick} name="plus" sx={{ pt: 1, pb: 1 }} variant="outlined" size="medium" color="primary">+</Button>
              <div>
                <Button onClick={handleClick} name="add" sx={{ mt: 1, width: '100%' }} variant="contained" color="primary">Add to cart</Button>
              </div>
            </Card>
          </CardActions>
        </Card>
      </Container>
    </div>
  )

}

export default Show