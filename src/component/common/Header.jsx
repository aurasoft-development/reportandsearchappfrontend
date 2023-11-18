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
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </Typography>

                        <Typography color="inherit">Search And Report Engine</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header