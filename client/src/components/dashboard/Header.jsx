import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo.png';

const Header = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 'auto',
              height: '40px', // Adjust as needed
              display: isMobile ? 'block' : 'none'
            }}
          />
        </Box>
        {!isMobile && (
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        )}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
