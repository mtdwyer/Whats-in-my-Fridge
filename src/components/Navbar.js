import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const primary = "#512da8";
const purple = "#512da8";
const style = {
  background: "#512da8"
};
const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            The Kitchen
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
