import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import '../../assets/css/homepage.css'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()

  const AddCategory = () => {
    navigate('/allcategory')
  }

  const searchdata = () => {
    navigate('/search')
  }
  return (
    <>
      <div className='HomeMainParent'>
        <Box className="HomeChild" justifyContent="space-between">
            <Box display="flex" justifyContent="space-between">
              <Button variant="contained" className=' AddButton mx-2' onClick={() => AddCategory()} >Register Report</Button>
              <Button variant="contained" className='AddButton mx-2' onClick={() => searchdata()} >Search</Button>
            </Box>
        </Box>
      </div>
    </>
  )
}

export default HomePage