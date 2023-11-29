// Importing React and necessary components
import React from 'react'
import { FindState } from '../../context/FindContext';
import { Button, Grid  } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Common.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AllDetails = () => {

    // Accessing searchResult and navigate from FindState and useNavigate
    const { searchResult } = FindState();
    const navigate = useNavigate()
    return (
        <>
            <div className='DetailsParent'>
                <h2 className='text-center  headerStyle'>Here is {searchResult?.categories1?.uid} detailed report.</h2>
                <Grid container spacing={3} className='ParentGrid '>
                    <Grid item xs={12} sm={6}>
                                                {/* First-column layout for report details */}
                        <Card>
                            <CardContent>
                                                                {/* Table for displaying user details */}

                                <table className="table user-view-table">
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
                                            <td>Field1</td>
                                            <td>{searchResult?.categories1?.field1}</td>
                                        </tr>
                                        <tr>
                                            <td>Field3</td>
                                            <td>{searchResult?.categories1?.field3}</td>
                                        </tr>
                                        <tr>
                                            <td>Field5</td>
                                            <td>{searchResult?.categories1?.field5}</td>
                                        </tr>
                                        <tr>
                                            <td>Field7</td>
                                            <td>{searchResult?.categories1?.field7}</td>
                                        </tr>
                                        <tr>
                                            <td>Field9</td>
                                            <td>{searchResult?.categories1?.field9}</td>
                                        </tr>
                                        <tr>
                                            <td>User Image</td>
                                            <td><img width={"100px"} height={"100px"} src={searchResult?.categories1?.field11?.url} alt="user" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* Second-column layout for report details */}
                        <Card>
                            <CardContent>
                                {/* Table for displaying user details */}
                                <table className="table user-view-table m-0">
                                    <tbody>
                                        <tr>
                                            <td>Number:</td>
                                            <td>{searchResult?.categories1?.number}</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>{searchResult?.categories1?.address}</td>
                                        </tr>
                                        <tr>
                                            <td>Field2</td>
                                            <td>{searchResult?.categories1?.field2}</td>
                                        </tr>
                                        <tr>
                                            <td>Field4</td>
                                            <td>{searchResult?.categories1?.field4}</td>
                                        </tr>
                                        <tr>
                                            <td>Field6</td>
                                            <td>{searchResult?.categories1?.field6}</td>
                                        </tr>
                                        <tr>
                                            <td>Field8</td>
                                            <td>{searchResult?.categories1?.field8}</td>
                                        </tr>
                                        <tr>
                                            <td>Field10</td>
                                            <td>{searchResult?.categories1?.field10}</td>
                                        </tr>
                                        <tr>
                                            <td>User Selfie </td>
                                            <td><img width={"100px"} height={"100px"} src={searchResult?.categories1?.field12?.url} alt="selfie" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div style={{ cursor: 'pointer', marginLeft: '15px' }} className='text-center my-2 '><Button variant="contained" className='mainButton' onClick={() => navigate('/')}>Back To Home</Button></div>
            </div>
        </>
    )
}

// Exporting the AllDetails component
export default AllDetails
