import React from 'react'
import {
  MDBFooter,
} from 'mdb-react-ui-kit';
import { Box, Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";
import '../../assets/css/Common.css'


const FooterDetails = () => {
  return (
    <>
      <Box className='Footerparent text-center text-white' style={{ backgroundColor: '#0a4275' }}>

        <Tabs textColor='inherit' indicatorColor='secondary' value={false}  style={{display: 'block'}}>
          <Tab label="Privacy" component={Link} to="/" className='headerText' />
          <Tab label="Terms" component={Link} to="/" className='headerText' />
          <Tab label="Contact" component={Link} to="/" className='headerText' />
        </Tabs>

        <div className='text-center  footerend' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Search And Report Engine:
          {/* <a className='text-white' href='https://mdbootstrap.com/'> */}
          All Rights Reserved.
          {/* </a> */}
        </div>
      </Box>
    </>
  )
}

export default FooterDetails