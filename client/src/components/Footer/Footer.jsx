import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const Footer = () => {

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Hooked
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const footers = [
    {
      title: 'Team',
      description: [
        <Link 
          href="https://github.com/joshualev" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Josh
        </Link>,
        <Link 
          href="https://github.com/ecomtesse" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Evan
        </Link>,
        <Link 
          href="https://github.com/drinkwithdan" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Dan
        </Link>
      ],
    },
    {
      title: 'Features',
      description: [
        <Link 
          href="https://www.mongodb.com/" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >MongoDB
        </Link>,
        <Link 
          href="https://expressjs.com/" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Express JS
        </Link>,
        <Link 
          href="https://reactjs.org//" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >React JS
        </Link>,
        <Link 
          href="https://nodejs.org/en/" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Node
        </Link>
      ],
    },
    {
      title: 'Resources',
      description: [
        <Link 
          href="https://www.msc.org/en-au" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Marine Stewardship Council
        </Link>,
        <Link 
          href="https://www.greenpeace.org.au/" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >Greenpeace AU
        </Link>,
        <Link 
          href="https://goodfish.org.au/" 
          target="_blank" 
          style={{ textDecoration: "none" }} 
          >GoodFish
        </Link>,
      ]
    },
    {
      title: 'Legal',
      description: [
        <Link style={{ textDecoration: "none" }} >Privacy policy</Link>,
        <Link style={{ textDecoration: "none" }} >Terms of use</Link>
      ],
    },
  ];
  return (
    <Container>
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {footer.description.map((item) => (
                <li key={item} >
                  {item}
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

export default Footer
