// Importing React and MUI components
import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

// Array of page names for the drawer links
const PAGES = ["Home", "Categories", "Register", "Help"]

// DrawerCo component
const DrawerCo = () => {

    // State to manage the drawer's open/closed state
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>

                <List>

                    {/* Mapping through pages to create drawer links */}
                    {
                        PAGES.map((elem, ind) => {
                            return (
                                <ListItemButton onClick={() => setOpenDrawer(false)} key={ind}>
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

// Exporting the DrawerCo component
export default DrawerCo