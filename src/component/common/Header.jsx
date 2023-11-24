import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Tab, Tabs } from '@mui/material';
import '../../assets/css/Header.css'

const Header = () => {
    return (
        <>
            <div className='hedaerParent' >
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" className='headerChild'>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <QueryStatsIcon style={{ fontSize: '1em', color: 'white' }} />
                            </IconButton>
                            <Tab label="Search And Report Engine" className='headerText' />
                            <Box sx={{ flexGrow: 1 }} />
                            <Tabs textColor='inherit' indicatorColor='secondary' value={false} >
                                <Tab label="Home" component={Link} to="/" className='headerText' style={{ fontSize: '1em', color: 'white' }}/>
                                <Tab label="Categories" component={Link} to="/" className='headerText' />
                                <Tab label="Register" component={Link} to="/" className='headerText' />
                                <Tab label="Help" component={Link} to="/" className='headerText' />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </>
    )
}

export default Header