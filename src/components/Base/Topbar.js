import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Topbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
              color="transparent"
              elevation={0}>
        <Toolbar>
          <IconButton
            onClick={() => props.setSidebarVisible(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
