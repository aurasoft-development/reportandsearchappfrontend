import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../assets/css/Tab.css'
import { Button, TextField } from '@mui/material';
import { FindState } from '../../context/FindContext';
import axios from 'axios'

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const { category1, category2, category3, category4, search, setSearch, searchResult, setSearchResult } = FindState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSearch = async (query) => {
        setSearch(query);
        if (!query) {
            return;
        }
        try {
            const { data } = await axios.get(`http://localhost:5000/api/search/all/categories?search=${search}`)
            setSearchResult(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch2 = async (query) => {
        setSearch(query);
        if (!query) {
            return;
        }
        try {
            const { data } = await axios.get(`http://localhost:5000/api/cat2/search/all/categories?search=${search}`)
            setSearchResult(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch3 = async (query) => {
        setSearch(query);
        if (!query) {
            return;
        }
        try {
            const { data } = await axios.get(`http://localhost:5000/api/cat3/search/all/categories?search=${search}`)
            setSearchResult(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch4 = async (query) => {
        setSearch(query);
        if (!query) {
            return;
        }
        try {
            const { data } = await axios.get(`http://localhost:5000/api/cat4/search/all/categories?search=${search}`)
            setSearchResult(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box sx={{ width: '100%' }}>
            <div className='tab_sec_container '>
                <CustomTabPanel value={value} index={0} >
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label='Category1' {...a11yProps(0)} />
                            <Tab label='Category2' {...a11yProps(1)} />
                            <Tab label='Category3' {...a11yProps(2)} />
                            <Tab label='Category4' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <div className='tab_div_main'>
                        <div className='report-details'>
                            <span>Add Category</span>
                            <div className="search-input">
                                <TextField
                                    type="search"
                                    autoComplete="off"
                                    style={{ width: '250px' }}
                                    id="search"
                                    placeholder="Enter UID"
                                    label="Search"
                                    // value={"search"}
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                                <Button variant="contained" color="success">Search</Button>
                            </div>
                        </div>
                        {/* <div>
                            <ViewReport data={category1.data} />
                        </div> */}
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label='Category1' {...a11yProps(0)} />
                            <Tab label='Category2' {...a11yProps(1)} />
                            <Tab label='Category3' {...a11yProps(2)} />
                            <Tab label='Category4' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <div className='tab_div_main'>
                        <div className='report-details'>
                            <span>Add Category</span>
                            <div className="search-input">
                                <TextField
                                    type="search"
                                    autoComplete="off"
                                    style={{ width: '250px' }}
                                    id="search"
                                    placeholder="Enter UID"
                                    label="Search"
                                    // value={"search"}
                                    onChange={(e) => handleSearch2(e.target.value)}
                                />
                                <Button variant="contained" color="success">Search</Button>
                            </div>
                        </div>
                        {/* <div>
                            <ViewReport data={category2.data} />
                        </div> */}
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label='Category1' {...a11yProps(0)} />
                            <Tab label='Category2' {...a11yProps(1)} />
                            <Tab label='Category3' {...a11yProps(2)} />
                            <Tab label='Category4' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <div className='tab_div_main'>
                        <div className='report-details'>
                            <span>Add Category</span>
                            <div className="search-input">
                                <TextField
                                    type="search"
                                    autoComplete="off"
                                    style={{ width: '250px' }}
                                    id="search"
                                    placeholder="Enter UID"
                                    label="Search"
                                    // value={"search"}
                                    onChange={(e) => handleSearch3(e.target.value)}
                                />
                                <Button variant="contained" color="success">Search</Button>
                            </div>
                        </div>
                        {/* <div>
                            <ViewReport data={category3.data} />
                        </div> */}
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Box >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label='Category1' {...a11yProps(0)} />
                            <Tab label='Category2' {...a11yProps(1)} />
                            <Tab label='Category3' {...a11yProps(2)} />
                            <Tab label='Category4' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <div className='tab_div_main'>
                        <div className='report-details'>
                            <span>Add Category</span>
                            <div className="search-input">
                                <TextField
                                    type="search"
                                    autoComplete="off"
                                    style={{ width: '250px' }}
                                    id="search"
                                    placeholder="Enter UID"
                                    label="Search"
                                    // value={"search"}
                                    onChange={(e) => handleSearch4(e.target.value)}
                                />
                                <Button variant="contained" color="success">Search</Button>
                            </div>
                        </div>
                    </div>
                </CustomTabPanel>
            </div>
        </Box>
    );
}