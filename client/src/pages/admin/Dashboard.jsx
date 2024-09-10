import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Header from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header onMenuClick={handleSidebarToggle} />
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Offset header height
        }}
      >
        <Toolbar />
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
};

export default Dashboard;
