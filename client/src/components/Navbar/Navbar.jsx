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
import Logo from '../../hooked-green.svg'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Container from '@mui/material/Container'



export default function Navbar(props) {
  const handleClick = async () => {
    const res = await fetch ('/users/logout', {
      method: 'POST'
    })
    props.handleLogout()
  }
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" color="default">
          <Toolbar disableGutters >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {props.authorised 
          ?
          <>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <IconButton size="large" color="primary" variant="text" sx={{m:1}}>
              <HomeIcon />
          </IconButton>
          </NavLink>
            <NavLink to="/new" style={{ textDecoration: 'none' }}>
              <IconButton
                size="large" color="primary" variant="text" sx={{m:1}} >
                  <AddIcon/>
              </IconButton>
            </NavLink>
          </>
          : 
          <>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Button size="large" color="primary" variant="outlined" sx={{m:1}}>
              <HomeIcon sx={{pr:1}} /> Home
          </Button>
          </NavLink>
          </>
          }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none', flexGrow:1 }}}>
            <img src={Logo}/>    
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Link to='/cart' style={{ textDecoration: "none" }}>
              <IconButton
                  variant="text"
                  size="large"
                  aria-label="Show cart items"
                  color="primary"
                  sx={{m:1}}
                >
                  <Badge
                    badgeContent={props.cart.totalQuantity}
                    color="info"
                    >
                  <ShoppingCartIcon />
                  </Badge>
              </IconButton>
            </Link>
            {props.authorised 
              ?
                <IconButton 
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    variant="text"
                    color="primary"
                    onClick={handleClick}
                    sx={{m:1}}
                >
                  <LogoutIcon/>    
                </IconButton>    
              :
                <Link to='/signin' style={{textDecoration:"none"}}>
                <IconButton 
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    variant="text"
                    color="primary"
                    sx={{m:1}}
                  >
                     <LoginIcon />
                </IconButton>
              </Link>
            }
          </Box>
       

          <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow:1 }, mr: 1 }}> 
            <img src={Logo}/>    
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >  
            <NavLink to="/" style={{ textDecoration: 'none' }}
            >
              <Button color="primary" e sx={{ p: 3}}>
                Home
              </Button>
            </NavLink> 
              {props.authorised && <NavLink to="/new" style={{ textDecoration: 'none' }}>
                <Button sx={{ p: 3 }} >
                  Add Item
                </Button>
            </NavLink>}
            <Box sx={{ flexGrow: 1 }} >
              <Link to='/cart' style={{ textDecoration: "none" }}>
                  <Button
                    variant="text"
                    size="small"
                    aria-label="Show cart items"
                    color="primary"
                    sx={{ p:3 }}>
                    <Badge
                      badgeContent={props.cart.totalQuantity}
                      color="info"
                      sx={{ mr: 2 }}>
                      <ShoppingCartIcon />
                    </Badge> View Cart
                  </Button>
                </Link>
                {props.authorised 
                  ?
                        <Button sx={{ p:3 }}
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
                          <Button sx={{ p:3 }}
                              size="small"
                              edge="end"
                              aria-label="account of current user"
                              variant="text"
                              color="primary"
                          >
                            <AccountCircle sx={{ mr: 2 }} /> Sign in
                          </Button>
                </Link>
                }
              </Box>            
            </Box>         
          </Toolbar>
        </AppBar>
      </Box>
     

  {/* <AppBar className="AppBar" position="static" color="inherit" sx={{boxShadow:'none'}}>
     */}
      <Searchbar
        fishList={props.fishList} 
     />
  
 {/* </AppBar> */}

    </>
  );
}
