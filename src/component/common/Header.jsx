// Importing React and MUI components and icons
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import '../../assets/css/Header.css'
import DrawerCo from './DrawerCo';


// Header component
const Header = () => {

    // Accessing the MUI theme and media query hooks
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const deleteLocalData = () => {
        localStorage.removeItem("category1")
    }

    return (
        <>
            {/* Parent container for the header */}
            <div className='hedaerParent' >
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" className='headerChild'>
                        <Toolbar>
                        <Link to="/" className='logo-link'>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <QueryStatsIcon style={{ fontSize: '1em', color: 'white' }} />
                            </IconButton>
                            </Link>
                            {/* Conditional rendering based on media query */}
                            {
                                isMatch ? (
                                    <>
                                        <Tab label="Search And Report Engine" className='headerText' />
                                        <DrawerCo />
                                    </>
                                ) :
                                    <>
                                        <Tabs textColor='inherit' indicatorColor='secondary' value={false} >
                                            <Tab label="Home" onClick={() => deleteLocalData()} component={Link} to="/" className='headerText' />
                                            <Tab label="Categories" component={Link} to="/" className='headerText' />
                                            <Tab label="Register" component={Link} to="/" className='headerText' />
                                            <Tab label="Help" component={Link} to="/" className='headerText' />
                                        </Tabs>
                                        <Box sx={{ flexGrow: 1 }} />

                                        <Tab label="Search And Report Engine" className='headerText' />
                                    </>
                            }
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </>
    )
}

// Exporting the Header component
export default Header