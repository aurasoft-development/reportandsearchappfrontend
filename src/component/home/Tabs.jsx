// Importing necessary dependencies and components from React and Material-UI
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
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

// Custom Tab Panel component
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

// Main component for handling tabs and search functionality
export default function BasicTabs() {
    const navigate = useNavigate();

    // State for controlling the active tab and search inputs
    const [value, setValue] = React.useState(0);
    const [searchData, setSearhData] = React.useState("");
    const [searchData2, setSearhData2] = React.useState("");
    const [searchData3, setSearhDat3] = React.useState("");
    const [searchData4, setSearhData4] = React.useState("");

    // Destructuring state and functions from context
    const { search, setSearch, searchResult, setSearchResult, setStep } = FindState();

    // Handler for changing tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setStep(1)
    };

    // Function for searching in Category1
    const handleSearch = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID.')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    // Function for searching in Category2
    const handleSearch2 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID.')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat2/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    // Function for searching in Category3
    const handleSearch3 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID.')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat3/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    // Function for searching in Category4
    const handleSearch4 = async (uid) => {
        if (!uid) {
            toast.warn('Please Enter UID.')
        } else {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat4/get_categories/by_uid?uid=${uid}`)
                setSearchResult(data)

            } catch (error) {
                console.log(error);
            }
        }
    }

    // Function to navigate to the payment page
    const payMent = () => {
        navigate('/payment')
    }

    // useEffect to trigger actions when the active tab changes
    useEffect(() => {
        setSearchResult("screen")
    }, [value])

    // Render the main component structure with tabs and search functionality
    return (
        <Box sx={{}} className="SearchParent">
            <div className='tab_sec_container completeBox'>

                <Box >
                    {/* Tab Panel for Category1 */}
                    <CustomTabPanel value={value} index={0} >
                        <span className="completeBox"></span>
                    </CustomTabPanel>

                    {/* Tab Panel for Category2 */}
                    <CustomTabPanel value={value} index={1} >
                        <span className="completeBox"></span>
                    </CustomTabPanel>

                    {/* Tab Panel for Category3 */}
                    <CustomTabPanel value={value} index={2} >
                        <span className="completeBox"></span>
                    </CustomTabPanel>

                    {/* Tab Panel for Category4 */}
                    <CustomTabPanel value={value} index={3} >
                        <span className="completeBox"></span>
                    </CustomTabPanel>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab style={{ color: 'white' }} label='Category 1' {...a11yProps(0)} />
                        <Tab style={{ color: 'white' }} label='Category 2' {...a11yProps(1)} />
                        <Tab style={{ color: 'white' }} label='Category 3' {...a11yProps(2)} />
                        <Tab style={{ color: 'white' }} label='Category 4' {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <Box>
                    {/* Search and display for Category 1 */}
                    <CustomTabPanel value={value} index={0}>
                        <div className='tab_div_main'>
                            <div className='report-details mainParentSeachBox'>
                                <div className="search-input">
                                    <TextField
                                        type="search"
                                        autoComplete="off"
                                        id="search"
                                        placeholder="Enter UID"
                                        className='SearchTextfield'
                                        color="success"
                                        label="Select category and search"
                                        onChange={(e) => setSearhData(e.target.value)}
                                    />
                                    <Button variant="contained" className='searchButton mainButton mx-2' onClick={() => handleSearch(searchData)}>Search</Button>
                                </div>
                            </div>
                            <div className="user-details">
                                {searchResult === "screen" ? (
                                    <div></div>
                                ) : (searchResult?.categories1 == null) ? (
                                    <div className="card mt-3   p-1">
                                        <hr className="border-light m-0" />
                                        <div className="card-body text-center">
                                            <p style={{ color: 'black' }}>The details are not found. Please check into other categories.</p>
                                        </div>
                                    </div>
                                ) : <>
                                    <div className="card mt-3   p-1">
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

                                            <Box >
                                                <Grid container>
                                                    <Grid xs={12} md={6}>
                                                        <div className='fullReportBtn'>
                                                            <Button className='m-2 mainButton' variant="contained" onClick={payMent}>Click here for full report</Button>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={12} md={6}>
                                                        <div className='activity lead'>
                                                            <div class="blink"><EmojiObjectsIcon style={{ fontSize: '70px' }} /></div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <div>


                                            </div>
                                        </div>
                                    </div>
                                </>
                                }
                            </div>
                        </div>
                    </CustomTabPanel>

                    {/* Search and display for Category2 */}
                    <CustomTabPanel value={value} index={1}>
                        <div className='tab_div_main'>
                            <div className='report-details mainParentSeachBox'>
                                <div className="search-input">
                                    <TextField
                                        type="search"
                                        autoComplete="off"
                                        className='SearchTextfield'
                                        id="search"
                                        color="success"
                                        placeholder="Enter UID"
                                        label="Select category and search"
                                        onChange={(e) => setSearhData2(e.target.value)}
                                    />
                                    <Button variant="contained" className='searchButton mainButton mx-2' onClick={() => handleSearch2(searchData2)}>Search</Button>
                                </div>
                            </div>
                            <div className="user-details">
                                {searchResult === "screen" ? (
                                    <div></div>
                                ) : (searchResult?.categories1 == null) ? (
                                    <div className="card mt-3   p-1">
                                        <hr className="border-light m-0" />
                                        <div className="card-body text-center">
                                            <p style={{ color: 'black' }}>The details are not found. Please check into other categories.</p>
                                        </div>
                                    </div>
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
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={6} md={6}>
                                                        <div className='fullReportBtn'>
                                                            <Button className='m-2 mainButton' variant="contained" onClick={payMent}>Click here for full report</Button>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className='activity lead'>
                                                            <div class="blink"><EmojiObjectsIcon style={{ fontSize: '70px' }} /></div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </div>
                                    </div>
                                </>
                                }
                            </div>
                        </div>
                    </CustomTabPanel>

                    {/* Search and display for Category3 */}
                    <CustomTabPanel value={value} index={2}>
                        <div className='tab_div_main'>
                            <div className='report-details mainParentSeachBox'>
                                <div className="search-input">
                                    <TextField
                                        type="search"
                                        autoComplete="off"
                                        id="search"
                                        placeholder="Enter UID"
                                        className='SearchTextfield'
                                        label="Select category and search"
                                        onChange={(e) => setSearhDat3(e.target.value)}
                                    />
                                    <Button variant="contained" className='searchButton mainButton mx-2' onClick={() => handleSearch3(searchData3)}>Search</Button>
                                </div>
                            </div>
                            <div className="user-details">
                                {searchResult === "screen" ? (
                                    <div></div>
                                ) : (searchResult?.categories1 == null) ? (
                                    <div className="card mt-3   p-1">
                                        <hr className="border-light m-0" />
                                        <div className="card-body text-center">
                                            <p style={{ color: 'black' }}>The details are not found. Please check into other categories.</p>
                                        </div>
                                    </div>
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
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={6} md={6}>
                                                        <div className='fullReportBtn'>
                                                            <Button className='m-2 mainButton' variant="contained" onClick={payMent}>Click here for full report</Button>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className='activity lead'>
                                                            <div class="blink"><EmojiObjectsIcon style={{ fontSize: '70px' }} /></div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </div>
                                    </div>
                                </>
                                }
                            </div>
                        </div>
                    </CustomTabPanel>

                    {/* Search and display for Category4 */}
                    <CustomTabPanel value={value} index={3}>
                        <div className='tab_div_main'>
                            <div className='report-details mainParentSeachBox'>
                                <div className="search-input">
                                    <TextField
                                        type="search"
                                        autoComplete="off"
                                        id="search"
                                        color="success"
                                        placeholder="Enter UID"
                                        className='SearchTextfield'
                                        label="Select category and search"
                                        onChange={(e) => setSearhData4(e.target.value)}
                                    />
                                    <Button variant="contained" className='searchButton mainButton mx-2' onClick={() => handleSearch4(searchData4)}>Search</Button>
                                </div>
                            </div>
                            <div className="user-details">
                                {searchResult === "screen" ? (
                                    <div></div>
                                ) : (searchResult?.categories1 == null) ? (
                                    <div className="card mt-3   p-1">
                                        <hr className="border-light m-0" />
                                        <div className="card-body text-center">
                                            <p style={{ color: 'black' }}>The details are not found. Please check into other categories.</p>
                                        </div>
                                    </div>
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
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={6} md={6}>
                                                        <div className='fullReportBtn'>
                                                            <Button className='m-2 mainButton' variant="contained" onClick={payMent}>Click here for full report</Button>
                                                        </div>
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                        <div className='activity lead'>
                                                            <div class="blink"><EmojiObjectsIcon style={{ fontSize: '70px' }} /></div>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </div>
                                    </div>
                                </>
                                }
                            </div>
                        </div>
                    </CustomTabPanel>
                </Box>
            </div>
        </Box>
    );
}