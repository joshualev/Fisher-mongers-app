import { NavLink, Link } from 'react-router-dom'
import * as React from 'react';
import Searchbar from './Searchbar'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button'
import Logo from '../../hooked-new-cropped.svg'

export default function Navbar(props) {
  
  const handleClick = async () => {
    const res = await fetch ('/users/logout', {
      method: 'POST'
    })
    props.handleLogout()
  }
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={Logo}></img>    
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Link to='/cart' style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="small"
                  aria-label="Show cart items"
                  color="primary"
                  sx={{ mr:1,mt: 0.75 }}>
                  <Badge
                    badgeContent={props.cart.totalQuantity}
                    color="error"
                    sx={{ mr: 2 }}>
                    <ShoppingCartIcon />
                  </Badge> View Cart
                </Button>
              </Link>

              {props.authorised 
                ?
                <Button sx={{ pl: 2, mt: 0.75 }}
                size="small"
                edge="end"
                aria-label="account of current user"
                variant="text"
                color="primary"
                onClick={handleClick}
              >
                <AccountCircle sx={{ mr: 2 }} /> Sign out
              </Button>
                 
                :
                <Link to='/signin' style={{textDecoration:"none"}}>
                <Button sx={{ pl: 2, mt: 0.75 }}
                    size="small"
                    edge="end"
                    aria-label="account of current user"
                    variant="text"
                    color="primary"
                    // onClick={handleClick}
                  >
                    <AccountCircle sx={{ mr: 2 }} /> Sign in
                </Button>
              </Link>
             }

            </Box>
           
          </Toolbar>
        </AppBar>
      </Box>

      <AppBar
        position="static"
        color="inherit"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'start'
            }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}
            >
              <Button sx={{ p: 3 }}>
                Home
              </Button>
            </NavLink>
            
            <Button
              sx={{ p: 3 }} >
              Categories
            </Button>
            <Button
              sx={{ p: 3 }} >
              Specials
            </Button>
            <Button
              sx={{ p: 3 }} >
              Whats on
            </Button>
            {props.authorised && <NavLink to="/new" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ p: 3 }} >
                New Item
              </Button>
            </NavLink>}
          </Box>
          <Searchbar sx={{
            flexGrow: 1
          }} fishList={props.fishList} />
        </Toolbar>
      </AppBar>
    </>
  );
}
