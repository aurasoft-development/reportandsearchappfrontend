import React from 'react'

import { Box, Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";
import '../../assets/css/Common.css'


const FooterDetails = () => {
  return (
    <>
      <Box className='Footerparent text-center text-white' style={{ backgroundColor: '#5A100B' }}>
        <Tabs textColor='inherit' indicatorColor='secondary' value={false}  style={{display: 'block'}}>
          <Tab label="Privacy" component={Link} to="/" className='headerText' />
          <Tab label="Terms" component={Link} to="/" className='headerText' />
          <Tab label="Contact" component={Link} to="/" className='headerText' />
        </Tabs>
      </Box>
    </>
  )
}

export default FooterDetails