
import * as React from 'react';
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

const Show = (fishList) => {

  // fishList props not flowing in fast enough for render, keeps breaking!

  // const params = useParams()
  // const fish = fishList.find((f) => f._id === params.fishID)
  // console.log(fish);

  // Temporary placeholder
  const fish = {
    caughtBy: "Barry",
    description: "A meaty, white fish. Great for grilling or the BBQ.",
    imageURL: "https://loremflickr.com/300/300/snapper",
    price: 20,
    species: "Snapper",
    stock: 5
  }

  return (
    <>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
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
      </Container>
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
              image="https://www.fishfiles.com.au/-/media/fishfiles/images/preparing-seafood/110830_erd_snapper__0374sm.ashx?h=453&w=1000&la=en&hash=1D1B5A009344F3AD329992DAD21F959C16B17529"
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
                Stock remaining: {fish.stock}
              </Typography>
            </Box>
          </CardContent>
          <CardActions disableSpacing sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Card sx={{ mb: 1 }}>
              <Button sx={{ pt: 1, pb: 1 }} variant="outlined" size="medium" color="primary">-</Button>
              <Typography variant="p" sx={{ p: 2 }}>
                6
              </Typography>
              <Button sx={{ pt: 1, pb: 1 }} variant="outlined" size="medium" color="primary">+</Button>
              <div>
                <Button sx={{ mt: 1, width: '100%' }} variant="contained" color="primary">Add to cart</Button>
              </div>
            </Card>
          </CardActions>
        </Card>


      </Container>


    </>
  )
}

export default Show