import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"



const NavListDrawer = ({navLinks}) => {
  return (
    <Box sx={{ width: 250, bgcolor:"#837AFF", color: "white"}}>
      <nav>
        <List color="inherit">
            {
                navLinks.map(item => (
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton 
                        component="a"
                        href={item.path}
                        >
                        <ListItemIcon>
                            {item.icon}    
                        </ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }

        </List>
      </nav>

    </Box>
  )
}

export default NavListDrawer