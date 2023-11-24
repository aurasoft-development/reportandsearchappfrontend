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
import '../../assets/css/form/Header.css'




const Header = () => {
    return (
        <>
            <div className='hedaerParent' >
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style={{ backgroundColor:'rgba(90, 16, 11, 0.8)'}}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                // color="black"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <QueryStatsIcon style={{ fontSize: '1em', color:'white' }} />
                            </IconButton>

                            <Tabs textColor='inherit' indicatorColor='secondary' value={false} >
                                <Tab label="Home" component={Link} to="/"  className='headerText'/>
                                <Tab label="Categories" component={Link} to="/" className='headerText'/>
                                <Tab label="Register" component={Link} to="/" className='headerText' />
                                <Tab label="Help" component={Link} to="/" className='headerText' />
                            </Tabs>

                            <Box sx={{ flexGrow: 1 }} />

                            <Tab label="Search And Report Engine"  className='headerText' />

                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </>
    )
}

export default Header