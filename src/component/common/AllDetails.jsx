import React from 'react'
import { FindState } from '../../context/FindContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const AllDetails = () => {
    const { searchResult } = FindState();
    const navigate = useNavigate()
    return (
        <>
            <h2 className='text-center mt-2'>Here is {searchResult?.categories1?.uid} detailed report.</h2>
            <div className='row'>
                <div className='col-lg-6 col-12'>
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
                                        <td>Field 1</td>
                                        <td>{searchResult?.categories1?.field1}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 3</td>
                                        <td>{searchResult?.categories1?.field3}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 5</td>
                                        <td>{searchResult?.categories1?.field5}</td>
                                    </tr>
                                    <tr>
                                        <td>Field </td>
                                        <td>{searchResult?.categories1?.field5}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 9</td>
                                        <td>{searchResult?.categories1?.field9}</td>
                                    </tr>

                                    <tr>
                                        <td>User Image</td>
                                        <td><img src={searchResult?.categories1?.field11?.url} alt="user" /></td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className="card mt-3  m-3 p-1">
                        <hr className="border-light m-0" />
                        <div className="card-body">
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
                                        <td>Field 2</td>
                                        <td>{searchResult?.categories1?.field2}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 4</td>
                                        <td>{searchResult?.categories1?.field4}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 6</td>
                                        <td>{searchResult?.categories1?.field6}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 8</td>
                                        <td>{searchResult?.categories1?.field8}</td>
                                    </tr>
                                    <tr>
                                        <td>Field 10</td>
                                        <td>{searchResult?.categories1?.field10}</td>
                                    </tr>

                                    <tr>
                                        <td>User Selfie </td>
                                        <td><img src={searchResult?.categories1?.field12?.url} alt="selfie" /></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div style={{ cursor: 'pointer', marginLeft: '15px' }} className='text-center mt-2'><Button variant="contained" color="success" onClick={() => navigate('/')}>Back To Home</Button></div>
        </>
        )
}

export default AllDetails
