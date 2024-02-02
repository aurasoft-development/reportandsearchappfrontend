// Importing React and necessary components
import React, { useEffect, useRef, useState } from 'react'
import { FindState } from '../../context/FindContext';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import '../../assets/css/Common.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useReactToPrint } from "react-to-print"


const AllDetails = () => {

    // Accessing searchResult and navigate from FindState and useNavigate
    const { searchResult } = FindState();

    // State variable to store data retrieved from localStorage
    const [data, setData] = useState()
    const navigate = useNavigate()

    const ComponentPdf = useRef()

    const GeneratePdf = useReactToPrint({
        content: () => ComponentPdf.current,
        documentTitle: "userDetails",
        // onAfterPrint:alert("data dw+ownload successfully")
    });

    // useEffect to retrieve and set data from localStorage when the component mounts
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        console.log("dfdf", Info);
        setData(Info)
    }, [])

    const CleaderLocalData = () => {
        localStorage.removeItem("category1")
        navigate('/')
    }

    return (
        <div className='DetailsParent' >

            {data ? <h3 className="text-center headerStyle p-2">Thanks for submitting details!</h3> : <h2 className='text-center  headerStyle p-2'>Here is {searchResult?.categories1?.iMEINo} detailed report.</h2>}

            <Grid container spacing={3} className='ParentGrid' ref={ComponentPdf}>
                <Grid item xs={12} sm={6}>
                    {/* First-column layout for report details */}
                    <Card>
                        <CardContent>
                            {/* Table for displaying user details */}

                            <table className="table user-view-table m-0">
                                <tbody>
                                    <tr className='borderColor'>
                                        <td>IMEINo:</td>
                                        {data ? <td>{data?.iMEINo}</td> : <td>{searchResult?.categories1?.iMEINo}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Make:</td>
                                        {data ? <td>{data?.make}</td> : <td>{searchResult?.categories1?.make}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Complain Number </td>
                                        {data ? <td>{data?.complainNumber}</td> : <td>{searchResult?.categories1?.complainNumber}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>City </td>
                                        {data ? <td>{data?.city}</td> : <td>{searchResult?.categories1?.city}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Owner Name </td>
                                        {data ? <td>{data?.ownerName}</td> : <td>{searchResult?.categories1?.ownerName}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Purchase Bill Date </td>
                                        {data ? <td>{data?.selectedDate}</td> : <td>{searchResult?.categories1?.selectedDate}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Purchase Cost </td>
                                        {data ? <td>{data?.purchaseCost}</td> : <td>{searchResult?.categories1?.purchaseCost}</td>}
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
                                        <td>Model:</td>

                                        {data ? <td>{data?.model}</td> : <td>{searchResult?.categories1?.model}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Colour:</td>
                                        {data ? <td>{data?.colour}</td> : <td>{searchResult?.categories1?.colour}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Complain Details </td>
                                        {data ? <td>{data?.complainDetails}</td> : <td>{searchResult?.categories1?.complainDetails}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Country </td>
                                        {data ? <td>{data?.country}</td> : <td>{searchResult?.categories1?.country}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Owner Number </td>
                                        {data ? <td>{data?.ownerNumber}</td> : <td>{searchResult?.categories1?.ownerNumber}</td>}
                                    </tr>

                                    <tr className='borderColor'>
                                        <td>Purchase Bill Number </td>
                                        {data ? <td>{data?.purchaseBillNumber}</td> : <td>{searchResult?.categories1?.purchaseBillNumber}</td>}
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
                <Button className='mainButton mx-1' onClick={() => { CleaderLocalData() }}>Back To Home</Button>
                <Button className='mainButton mx-1' onClick={() => { GeneratePdf() }}>Download</Button>
            </div>
        </div>
    )
}

// Exporting the AllDetails component
export default AllDetails