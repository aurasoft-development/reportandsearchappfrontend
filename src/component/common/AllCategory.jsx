// Importing necessary dependencies and components from React and Material-UI
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../assets/css/Tab.css'
import SecondForm from '../form/SecondForm';
import FirstForm from '../form/FirstForm';
import ThirdForm from '../form/ThirdForm';
import ForthForm from '../form/ForthForm';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// Function to generate accessibility props for tabs
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AllCategory = () => {

    // State for controlling the active tab and search inputs
    const [value, setValue] = React.useState(0);

    // Handler for changing tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <Box sx={{ width: '90%', margin: 'auto' }} className='p-2'>
                <div className='tab_sec_container completeBox'>
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <div className='tabParent'>
                                <Tab label='Category 1' {...a11yProps(0)} className='mt-3 TabChild' />
                                <Tab label='Category 2' {...a11yProps(1)} className='mt-3 TabChild' />
                                <Tab label='Category 3' {...a11yProps(2)} className='mt-3 TabChild' />
                                <Tab label='Category 4' {...a11yProps(3)} className='mt-3 TabChild' />
                            </div>
                        </Tabs>
                        {/* Tab Panel for Category1 */}
                        <CustomTabPanel value={value} index={0} >
                            <FirstForm />
                        </CustomTabPanel>

                        {/* Tab Panel for Category2 */}
                        <CustomTabPanel value={value} index={1} >
                            <SecondForm />
                        </CustomTabPanel>

                        {/* Tab Panel for Category3 */}
                        <CustomTabPanel value={value} index={2} >
                            <ThirdForm />
                        </CustomTabPanel>

                        {/* Tab Panel for Category4 */}
                        <CustomTabPanel value={value} index={3} >
                            <ForthForm />
                        </CustomTabPanel>
                    </Box>
                    <Box>
                    </Box>
                </div>
            </Box>
        </div>
    )
}

export default AllCategory