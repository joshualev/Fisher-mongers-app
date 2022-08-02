
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
    title: 'Company',
    description: ['Team', 'Contact us'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff #1',
      'Cool stuff #2',
      'Cool stuff #3',
    ],
  },
  {
    title: 'Resources',
    description: ['Sustainable fishing', 'Education Resouce #2', 'Education Resouce #3'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
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
        <ul>
          {footer.description.map((item) => (
            <li key={item}>
              <Link href="#" variant="subtitle1" color="text.secondary">
                {item}
              </Link>
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