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
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <Link to='/signin' style={{textDecoration: 'none'}}>
        <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
      </Link>
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
      <Link to='/cart' style={{textDecoration:'none'}} >
        <Button>
          Cart
        </Button>
      </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button>
          Account
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Badge badgeContent={ <PhishingIcon />} 
           >
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Hooked
          </Typography>
          </Badge>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to='/cart' style={{textDecoration:"none"}}> 
          <Button 
            variant="contained"
            size="small" 
            aria-label="Show cart items" 
            color="inherit"
            sx={{mt:0.75}}>
            <Badge 
            badgeContent={2} 
            color="error"
            sx={{mr:2}}>
                <ShoppingCartIcon/>
            </Badge> View Cart
          </Button>
          </Link>
            <Button sx={{pl:2,  mt:0.75}}
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{mr:2}}/> Account
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
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
      color="default"
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: 'wrap'}}>
        <Box 
          sx={{
            flexGrow: 1, 
            justifyContent:'start'
            }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}
            >
              <Button sx={{p: 3}}>
              Home
              </Button>
          </NavLink>
          <Button
          sx={{p: 3}} >
            Categories
          </Button>
          <Button
          sx={{p: 3}} >
            Specials
          </Button>
          <Button
          sx={{p: 3}} >
            Whats on
          </Button>
        </Box>
      <Searchbar sx={{
          flexGrow: 1 }} fishList={props.fishList}/>
      </Toolbar>
    </AppBar>
    </>
  );
}
