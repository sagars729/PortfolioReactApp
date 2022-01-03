import Drawer from '@mui/material/Drawer' 
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RocketLaunch from '@mui/icons-material/RocketLaunch';

function Sidebar(props) {
	return (
		<Drawer
		  anchor='left'
		  open={props.open}
		>
			<Box
				sx={{width: 250}}
                role="presentation"
            >
              <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                  <IconButton
                    onClick={() => props.setVisible(false)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </Box>
              <List>
                <ListItemButton component="a" href="/">
                  <ListItemIcon>
                    <RocketLaunch />
                  </ListItemIcon>
                  <ListItemText primary="Landing"/>
                </ListItemButton>
              </List>
			</Box>
		</Drawer>
	)
}

export default Sidebar;
