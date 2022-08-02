
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Show = () => {
    return(
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
          FISH NAME
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE DESCRIPTION HERE
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{width:'50%', align: 'center', justifyContent:'center'}}>
              <Card >
                <CardHeader
                  title="TITLE"
                  subheader="SUBHEAD"
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
                    sx={{height: 0, paddingTop: '56.25%', }} 
                    image="https://www.fishfiles.com.au/-/media/fishfiles/images/preparing-seafood/110830_erd_snapper__0374sm.ashx?h=453&w=1000&la=en&hash=1D1B5A009344F3AD329992DAD21F959C16B17529" 
                    title="Fish Species"
                />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                </CardContent>
                <CardActions disableSpacing sx={{display: 'flex',
                justifyContent: 'center'}}>
                    <Card sx={{mb:1}}>
                        <Button  sx={{pt:1, pb:1}} variant="contained" size="medium" color="primary">-</Button>
                        <Typography variant="p" sx={{p:2}}>
                            6
                        </Typography>
                        <Button sx={{pt:1, pb:1}} variant="contained"  size="medium" color="primary"></Button>
                        <div>
                            <Button sx={{mt:1, width:'100%'}} variant="contained" color="warning">Add to cart</Button>
                        </div>
                    </Card>
                </CardActions>
              </Card>
      </Container>
        </>
    )
}

export default Show