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
import CategoryModel from '../model/CategoryModel';
import commonApiRequest from '../../api/commonApi';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

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
    const { search, setSearch, searchResult, setSearchResult } = FindState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSearch = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSearch2 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat2/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSearch3 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat3/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSearch4 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat4/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    const payMent = () => {
        navigate('/payment')
    }
    useEffect(() => {
        setSearchResult("screen")
    }, [value])
    return (
        <div className='MainParent'>
            <div className='TabParent'>
                <Box sx={{ width: '80%', margin: 'auto' }}>
                    {/* <div className='tab_sec_container'> */}

                        <CustomTabPanel value={value} index={0} className="completeBox">
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
                                    <span><CategoryModel data={1} /></span>
                                    <div className="search-input">
                                        <TextField
                                            type="search"
                                            autoComplete="off"
                                            style={{ width: '250px' }}
                                            id="search"
                                            placeholder="Enter UID"
                                            label="Search"
                                            onChange={(e) => setSearhData(e.target.value)}
                                        />
                                        <Button variant="contained" color="success" onClick={() => handleSearch(searchData)}>Search</Button>
                                    </div>
                                </div>
                                <div className="user-details">
                                    {searchResult === "screen" ? (
                                        <div></div>
                                    ) : (searchResult?.categories1 == null) ? (
                                        <p>The details are not found. Please check into other categories.</p>
                                    ) : <>
                                        <div className="card mt-3  m-3 p-1">
                                            <hr className="border-light m-0" />
                                            <div className="card-body">
                                                {/* <div>red</div> */}
                                                <table className="table user-view-table m-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>UID:</td>
                                                            <td>{searchResult?.categories1?.uid}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{searchResult?.categories1?.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>{searchResult?.categories1?.number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{searchResult?.categories1?.address}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Button className='m-2' variant="contained" onClick={payMent}>Click here for full report </Button>

                                            </div>
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={1} className="completeBox">
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
                                    <span><CategoryModel data={2} /></span>
                                    <div className="search-input">
                                        <TextField
                                            type="search"
                                            autoComplete="off"
                                            style={{ width: '250px' }}
                                            id="search"
                                            placeholder="Enter UID"
                                            label="Search"
                                            onChange={(e) => setSearhData2(e.target.value)}
                                        />
                                        <Button variant="contained" color="success" onClick={() => handleSearch2(searchData2)}>Search</Button>
                                    </div>
                                </div>
                                <div className="user-details">
                                    {searchResult === "screen" ? (
                                        <div></div>
                                    ) : (searchResult?.categories1 == null) ? (
                                        <p>The details are not found. Please check into other categories.</p>
                                    ) : <>
                                        <div className="card mt-3  m-3 p-1">
                                            <hr className="border-light m-0" />
                                            <div className="card-body">
                                                <table className="table user-view-table m-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>UID:</td>
                                                            <td>{searchResult?.categories1?.uid}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{searchResult?.categories1?.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>{searchResult?.categories1?.number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{searchResult?.categories1?.address}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Button className='m-2' variant="contained" onClick={payMent}>Click here for full report </Button>

                                            </div>
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={2} className="completeBox">
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
                                    <span><CategoryModel data={3} /></span>
                                    <div className="search-input">
                                        <TextField
                                            type="search"
                                            autoComplete="off"
                                            style={{ width: '250px' }}
                                            id="search"
                                            placeholder="Enter UID"
                                            label="Search"
                                            onChange={(e) => setSearhDat3(e.target.value)}
                                        />
                                        <Button variant="contained" color="success" onClick={() => handleSearch3(searchData3)}>Search</Button>
                                    </div>
                                </div>
                                <div className="user-details">
                                    {searchResult === "screen" ? (
                                        <div></div>
                                    ) : (searchResult?.categories1 == null) ? (
                                        <p>The details are not found. Please check into other categories.</p>
                                    ) : <>
                                        <div className="card mt-3  m-3 p-1">
                                            <hr className="border-light m-0" />
                                            <div className="card-body">
                                                <table className="table user-view-table m-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>UID:</td>
                                                            <td>{searchResult?.categories1?.uid}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{searchResult?.categories1?.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>{searchResult?.categories1?.number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{searchResult?.categories1?.address}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Button className='m-2' variant="contained" onClick={payMent}>Click here for full report </Button>

                                            </div>
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={3} className="completeBox">
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
                                    <span><CategoryModel data={4} /></span>
                                    <div className="search-input">
                                        <TextField
                                            type="search"
                                            autoComplete="off"
                                            style={{ width: '250px' }}
                                            id="search"
                                            placeholder="Enter UID"
                                            label="Search"
                                            onChange={(e) => setSearhData4(e.target.value)}
                                        />
                                        <Button variant="contained" color="success" onClick={() => handleSearch4(searchData4)}>Search</Button>
                                    </div>
                                </div>
                                <div className="user-details">
                                    {searchResult === "screen" ? (
                                        <div></div>
                                    ) : (searchResult?.categories1 == null) ? (
                                        <p>The details are not found. Please check into other categories.</p>
                                    ) : <>
                                        <div className="card mt-3  m-3 p-1">
                                            <hr className="border-light m-0" />
                                            <div className="card-body">
                                                <table className="table user-view-table m-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>UID:</td>
                                                            <td>{searchResult?.categories1?.uid}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>{searchResult?.categories1?.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>{searchResult?.categories1?.number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>{searchResult?.categories1?.address}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Button className='m-2' variant="contained" onClick={payMent}>Click here for full report </Button>

                                            </div>
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </CustomTabPanel>

                    {/* </div> */}
                </Box>
            </div>
        </div>
    );
}