import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Tab, Tabs } from '@mui/material';

const PAGES = ["Home", "About", "Products", "Contact"]



const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <QueryStatsIcon style={{ fontSize: '1em' }} />
                        </IconButton>

                        <Tabs sx={{ flexGrow: 1 }} textColor='inherit' indicatorColor='secondary' value={false} >
                            <Tab label="Home" component={Link} to="/" style={{ color: 'white', fontSize: '20px' }} />
                        </Tabs>
                        <Typography color="inherit">Search And Report Engine</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header