import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
//Iconos mui
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import { Box } from "@mui/system";


const navLinks = [
    {
        title: "Usuario", path: "#user", icon: <PersonIcon />
    },
    {
        title: "Seccion 1", path: "#section1", icon: <CategoryIcon />
    },
    {
        title: "Seccion 2", path: "#section2", icon: <CategoryIcon />
    },
    {
        title: "Seccion 3", path: "#section3", icon: <CategoryIcon />
    }
]

const NavBar = () => {
    
    const [open, setOpen] = useState(false);

    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        sx = {{ display : { xs: "flex", sm: "none" } }}
                        edge="start"
                        color="inherit"    
                        size="large"
                        onClick={ () => setOpen(true)}
                    >
                        <MenuIcon />  
                    </IconButton>
                    <Typography variant="h6">
                        Alkibank
                    </Typography>
                    <Box 
                    sx={{flexGrow:1}}
                    display= {{ xs: "none", sm: "block"}}
                    > 
                    {
                        navLinks.map(item => (
                            <Button color="inherit" key={item.title} component="a" href={item.path}>{item.title}</Button>
                        ))
                    }
                    
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={ ()=> setOpen(false)}
                sx = {{ display : { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer navLinks={navLinks}/>  
            </Drawer>

        </>
        
    );
}

export default NavBar;