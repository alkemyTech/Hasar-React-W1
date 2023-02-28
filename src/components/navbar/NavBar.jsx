import { AppBar, Button, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { Box } from "@mui/system";
import IconAlky from "./IconAlky";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavBar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/">
            <IconAlky />
          </NavLink>

          <Box sx={{ flexGrow: 1 }} display={{ xs: "none", sm: "block" }}>
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};

export default NavBar;
