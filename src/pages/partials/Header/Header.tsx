import { FC, useState } from 'react'
import { AppBar, IconButton, Menu, MenuItem, Box, Toolbar, Link, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styles'

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: { sm: 'flex' }, alignItems: 'center' }}>
        <Box sx={{ display: { sm: 'flex' }, justifyContent: 'space-around', width: '50%', height: '68px' }}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            paddingX={5}
            sx={{ mr: 2, display: 'grid', placeItems: 'center', width: '30%', border: '2px solid black' }}
          >
            LOGO
          </Typography>
          <Typography
            variant='h6'
            noWrap
            component='div'
            paddingX={5}
            sx={{ mr: 2, display: 'grid', placeItems: 'center', border: '2px solid black' }}
          >
            ADVERTISEMENT
          </Typography>
        </Box>
        <Box sx={{ display: { sm: 'flex' }, justifyContent: 'space-around', width: '50%' }}>
          <IconButton sx={{ display: { sm: 'flex' }, flexDirection: 'column' }}>
            <ShoppingCartIcon />
            Shopping Cart
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: { sm: 'flex' }, alignSelf: 'center' }}>
            Account Management
          </Typography>
        </Box>
      </Box>
      <AppBar position='static'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { sm: 'flex' }, justifyContent: 'left', gap: 15 }}>
            <Link color='#fff' href='#' underline='hover'>
              Genre
            </Link>
            <Link color='#fff' href='#' underline='hover'>
              New Titles
            </Link>
            <Link color='#fff' href='#' underline='hover'>
              What's popular
            </Link>
            <Link color='#fff' href='#' underline='hover'>
              Bargain
            </Link>
            <Link color='#fff' href='#' underline='hover'>
              Gifts
            </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  )
}

export default Header
