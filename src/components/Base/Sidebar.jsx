/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import RocketLaunch from "@mui/icons-material/RocketLaunch";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const sideLinks = {
  Landing: {
    link: "/",
    icon: <RocketLaunch />,
  },
  "Reading List": {
    link: "https://potent-wasabi-374.notion.site/Research-Paper-Reading-List-1910082efb3b43a1aac3949a8c74341e",
    icon: <MenuBookIcon />,
  },
};

function Sidebar(props) {
  return (
    <Drawer anchor="left" open={props.open}>
      <Box sx={{ width: 250 }} role="presentation">
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
          {Object.entries(sideLinks).map((entry) => (
            <ListItemButton key={entry[0]} component="a" href={entry[1].link}>
              <ListItemIcon>{entry[1].icon}</ListItemIcon>
              <ListItemText primary={entry[0]} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
