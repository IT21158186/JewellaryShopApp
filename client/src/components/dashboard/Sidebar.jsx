import React from 'react';
import { Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: 'auto',
            height: '60px' // Adjust as needed
          }}
        />
      </Box>
      <List>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Profile" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
