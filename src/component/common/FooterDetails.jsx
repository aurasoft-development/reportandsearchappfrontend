// Importing React and MUI components
import React from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";
import '../../assets/css/Common.css'

// FooterDetails component
const FooterDetails = () => {
  return (
    <>
      <Box className='Footerparent text-center text-white' style={{ backgroundColor: 'rgba(90, 16, 11, 0.8)' }}>

        {/* MUI Tabs component for navigation links */}
        <Tabs textColor='inherit' indicatorColor='secondary' value={false} style={{ display: 'block' }}>
          <Tab label="Privacy" component={Link} to="/" className='headerText' />
          <Tab label="Terms" component={Link} to="/" className='headerText' />
          <Tab label="Contact" component={Link} to="/" className='headerText' />
        </Tabs>
      </Box>
    </>
  )
}

// Exporting the FooterDetails component
export default FooterDetails