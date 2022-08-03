import { NavLink, Link } from 'react-router-dom'
import * as React from 'react';
import Searchbar from './Searchbar'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhishingIcon from '@mui/icons-material/Phishing';
import Button from '@mui/material/Button'
import Logo from '../../hooked-new-cropped.svg'
import Grid from '@mui/material/Grid'


export default function PrimarySearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = async () => {
    const res = await fetch("/users/logout", {
      method: "POST"
    })
    props.handleLogout()
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleClick}>Sign out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <Link to='/cart' style={{ textDecoration: 'none' }} >
          <Button>
            Cart
          </Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button>
          Sign out
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <img src={Logo}></img>    
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='/cart' style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="small"
                  aria-label="Show cart items"
                  color="primary"
                  sx={{ mt: 0.75 }}>
                  <Badge
                    badgeContent={props.cart.totalQuantity}
                    color="error"
                    sx={{ mr: 2 }}>
                    <ShoppingCartIcon />
                  </Badge> View Cart
                </Button>
              </Link>
              <Button sx={{ pl: 2, mt: 0.75 }}
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                variant="text"
                color="lighter"
              >
              <AccountCircle sx={{ mr: 2 }} /> Sign out
              </Button>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
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
