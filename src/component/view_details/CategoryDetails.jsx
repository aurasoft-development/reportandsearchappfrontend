import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../assets/css/view_details/CategoryDetails.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const CategoryDetails = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])
    return (
        <div className='view_details_main'>
                <h3 className="text-center headerStyle">Thanks for submitting details!</h3> 
            <div className='row'>
                <div className='col-6'>
                    <div className="card mt-3 border-0  m-3 p-1">
                        <hr className="border-light m-0" />
                        <div className="card-body">
                            <table className="table user-view-table m-0">
                                <tbody>
                                    <tr className='borderColor'>
                                        <td>UID:</td>
                                        <td>{data?.uid}</td>
                                    </tr>
                                    <tr className='borderColor'>
                                        <td>Name:</td>
                                        <td>{data?.name}</td>
                                    </tr>
                                    {
                                        data?.field1 ? <tr className='borderColor'>
                                            <td>Field1 </td>
                                            <td>{data?.field1}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field3 ? <tr className='borderColor'>
                                            <td>Field3 </td>
                                            <td>{data?.field3}</td>
                                        </tr> : ""
                                    }

                                    {
                                        data?.field5 ? <tr className='borderColor'>
                                            <td>Field5 </td>
                                            <td>{data?.field5}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field7 ? <tr className='borderColor'>
                                            <td>Field7 </td>
                                            <td>{data?.field7}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field9 ? <tr className='borderColor'>
                                            <td>Field9 </td>
                                            <td>{data?.field9}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field11?.url ? <tr className='borderColor'>
                                            <td>User Image</td>
                                            <td><img width={"100px"} height={"100px"} src={data?.field11?.url} alt="" /></td>
                                        </tr> : ""
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card mt-3 border-0  m-3 p-1">
                        <hr className="border-light m-0"/>
                        <div className="card-body">
                            <table className="table user-view-table m-0">
                                <tbody>

                                    <tr className='borderColor'>
                                        <td>Number:</td>
                                        <td>{data?.number}</td>
                                    </tr>
                                    <tr className='borderColor'>
                                        <td>Address:</td>
                                        <td>{data?.address}</td>
                                    </tr>

                                    {
                                        data?.field2 ? <tr className='borderColor'>
                                            <td>Field2 </td>
                                            <td>{data?.field2}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field4 ? <tr className='borderColor'>
                                            <td>Field4 </td>
                                            <td>{data?.field4}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field6 ? <tr className='borderColor'>
                                            <td>Field6 </td>
                                            <td>{data?.field6}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field8 ? <tr className='borderColor'>
                                            <td>Field8 </td>
                                            <td>{data?.field8}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field10 ? <tr className='borderColor'>
                                            <td>Field10 </td>
                                            <td>{data?.field10}</td>
                                        </tr> : ""
                                    }
                                    {
                                        data?.field12?.url ? <tr className='borderColor'>
                                            <td>User Selfie</td>
                                            <td><img width={"100px"} height={"100px"} src={data?.field12?.url} alt="" /></td>
                                        </tr> : ""
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div className='view_detail_thanks'>
                <Button className='mainButton' onClick={() => { navigate('/'); localStorage.removeItem("category1") }}>Back To Search</Button>
            </div>
        </div>
    )
}

export default CategoryDetails