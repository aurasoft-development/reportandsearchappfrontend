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
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate(); 

    const [value, setValue] = React.useState(0);
    const [searchData, setSearhData] = React.useState("");
    const [searchData2, setSearhData2] = React.useState("");
    const [searchData3, setSearhDat3] = React.useState("");
    const [searchData4, setSearhData4] = React.useState("");

    const [userDetails , setUserDetails] = React.useState("")

    const { category1, category2, category3, category4, search, setSearch, searchResult, setSearchResult } = FindState();
    console.log("data get here", searchResult);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSearch = async (query) => {
        console.log("data get at first category", query);
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
        console.log("data get at second category", query);
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
        console.log("data get at third category", query);
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
        console.log("data get at forth category", query);
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

    const payMent = () =>{
        navigate('/payment')
      }

console.log('vikas data', searchResult);
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
                        <h3>hello  i am first category here </h3>
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
                                    // onChange={(e) => handleSearch(e.target.value)}
                                    onChange={(e) => setSearhData(e.target.value)}
                                />
                                <Button variant="contained" color="success" onClick={() => handleSearch(searchData)}>Search</Button>
                            </div>
                        </div>
                        <div className="user-details">
                            {searchResult.length > 0 ? (
                                <>
                                    <div className="card mt-3  m-3 p-1">
                                        <hr className="border-light m-0" />
                                        <div className="card-body">
                                            <table className="table user-view-table m-0">
                                                <tbody>
                                                    <tr>
                                                        <td>UID:</td> 
                                                        <td>{searchResult[0].uid}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Name:</td>
                                                        <td>{searchResult[0].name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Number:</td> 
                                                        <td>{searchResult[0].number}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>  
                                                        <td>{searchResult[0].address}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Button className='m-2' variant="contained" onClick={payMent}>Pay here to view more </Button>

                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p>User details not available.</p>
                            )}
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
                        <h3>hello  i am second category </h3>
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
                                    // onChange={(e) => handleSearch2(e.target.value)}
                                    onChange={(e) => setSearhData2(e.target.value)}
                                />
                                <Button variant="contained" color="success" onClick={() => handleSearch2(searchData2)}>Search</Button>
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
                        <h3>hello  i am third  category </h3>
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
                                    // onChange={(e) => handleSearch3(e.target.value)}
                                    onChange={(e) => setSearhDat3(e.target.value)}
                                />
                                <Button variant="contained" color="success" onClick={() => handleSearch3(searchData3)}>Search</Button>
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
                        <h3>hello  i am forth category </h3>
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
                                    // onChange={(e) => handleSearch4(e.target.value)}
                                    onChange={(e) => setSearhData4(e.target.value)}
                                />
                                <Button variant="contained" color="success" onClick={() => handleSearch4(searchData4)}>Search</Button>
                            </div>
                        </div>
                    </div>
                </CustomTabPanel>
            </div>
        </Box>
    );
}