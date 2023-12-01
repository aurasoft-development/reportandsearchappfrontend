// Importing React and necessary components
import React, { useEffect, useState } from 'react'
import { FindState } from '../../context/FindContext';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Common.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AllDetails = () => {

    // Accessing searchResult and navigate from FindState and useNavigate
    const { searchResult } = FindState();

    console.log('searchResult', searchResult);

    // State variable to store data retrieved from localStorage
    const [data, setData] = useState()
    console.log('Dataaa', data);
    const navigate = useNavigate()

    // useEffect to retrieve and set data from localStorage when the component mounts
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])

    // navigate('/'); localStorage.removeItem("category1") 

    const CleaderLocalData = () => {
        localStorage.removeItem("category1")
        localStorage.removeItem("category4")
        navigate('/')
    }

    return (
        <div className='DetailsParent'>
            {data ? <h3 className="text-center headerStyle p-2">Thanks for submitting details!</h3> : <h2 className='text-center  headerStyle p-2'>Here is {searchResult?.categories1?.uid} detailed report.</h2>}

            <Grid container spacing={3} className='ParentGrid '>
                <Grid item xs={12} sm={6}>
                    {/* First-column layout for report details */}
                    <Card>
                        <CardContent>
                            {/* Table for displaying user details */}

                            <table className="table user-view-table m-0">
                                <tbody>
                                    <tr className='borderColor'>
                                        <td>UID:</td>
                                        {data ? <td>{data?.uid}</td> : <td>{searchResult?.categories1?.uid}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Name:</td>
                                        {data ? <td>{data?.name}</td> : <td>{searchResult?.categories1?.name}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field1 </td>
                                        {data ? <td>{data?.field1}</td> : <td>{searchResult?.categories1?.field1}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field3 </td>
                                        {data ? <td>{data?.field3}</td> : <td>{searchResult?.categories1?.field3}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field5 </td>
                                        {data ? <td>{data?.field5}</td> : <td>{searchResult?.categories1?.field5}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field7 </td>
                                        {data ? <td>{data?.field7}</td> : <td>{searchResult?.categories1?.field7}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field9 </td>
                                        {data ? <td>{data?.field9}</td> : <td>{searchResult?.categories1?.field9}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>User Image</td>
                                        {data ? <td><img width={"100px"} height={"100px"} src={data?.field11?.url} alt="" /></td> : <td><img width={"100px"} height={"100px"} src={searchResult?.categories1?.field11?.url} alt="user" /></td>}
                                    </tr>

                                </tbody>
                            </table>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    {/* First-column layout for report details */}
                    <Card>
                        <CardContent>
                            {/* Table for displaying user details */}
                            <table className="table user-view-table m-0">
                                <tbody>

                                    <tr className='borderColor'>
                                        <td>Number:</td>

                                        {data ? <td>{data?.number}</td> : <td>{searchResult?.categories1?.number}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Address:</td>
                                        {data ? <td>{data?.address}</td> : <td>{searchResult?.categories1?.address}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field2 </td>
                                        {data ? <td>{data?.field2}</td> : <td>{searchResult?.categories1?.field2}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field4 </td>
                                        {data ? <td>{data?.field4}</td> : <td>{searchResult?.categories1?.field4}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field6 </td>
                                        {data ? <td>{data?.field6}</td> : <td>{searchResult?.categories1?.field6}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field8 </td>
                                        <td>{data?.field8}</td>
                                        {data ? <td>{data?.field8}</td> : <td>{searchResult?.categories1?.field8}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Field10 </td>
                                        {data ? <td>{data?.field10}</td> : <td>{searchResult?.categories1?.field10}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>User Selfie</td>
                                        {data ? <td><img width={"100px"} height={"100px"} src={data?.field12?.url} alt="" /></td> : <td><img width={"100px"} height={"100px"} src={searchResult?.categories1?.field12?.url} alt="selfie" /></td>}
                                    </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div style={{ cursor: 'pointer' }} className='text-center my-2 '>
                <Button className='mainButton' onClick={() => { CleaderLocalData() }}>Back To Search</Button>
            </div>
        </div>
    )
}

// Exporting the AllDetails component
export default AllDetails