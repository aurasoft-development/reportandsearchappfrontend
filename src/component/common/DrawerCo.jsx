import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const PAGES = ["Home", "Categories", "Register", "Help"]
const DrawerCo = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>

<List>
        {
          PAGES.map((elem,ind)=>{
            return(
              <ListItemButton onClick={()=> setOpenDrawer(false)} key={ind}>
                <ListItemIcon>
                    <ListItemText>{elem} </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            )
          })
        }
           
        </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerCo