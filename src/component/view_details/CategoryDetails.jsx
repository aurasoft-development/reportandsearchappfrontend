import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../assets/css/view_details/CategoryDetails.css'
import { useNavigate } from 'react-router-dom'

const CategoryDetails = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])
    return (
        <div className='view_details_main'>
            <div className='row'>
            <div className='view_detail_heading'>Thanks for submitting details</div>
                <div className='col-6'>
                    <div className="card mt-3  m-3 p-1">
                        <hr className="border-light m-0" />
                        <div className="card-body">
                            <table className="table user-view-table m-0">
                                <tbody>
                                    <tr>
                                        <td>UID:</td>
                                        <td>{data?.uid}</td>
                                    </tr>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{data?.name}</td>
                                    </tr>

                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field1}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field3}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field5}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field5}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field9}</td>
                                    </tr>

                                    <tr>
                                        <td>user img </td>
                                        <td><img width={"100px"} height={"100px"} src={data?.field11?.url} alt="" /></td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card mt-3  m-3 p-1">
                        <hr className="border-light m-0" />
                        <div className="card-body">
                            <table className="table user-view-table m-0">
                                <tbody>

                                    <tr>
                                        <td>Number:</td>
                                        <td>{data?.number}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>{data?.address}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field2}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field4}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field6}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field8}</td>
                                    </tr>
                                    <tr>
                                        <td>filed </td>
                                        <td>{data?.field10}</td>
                                    </tr>

                                    <tr>
                                        <td>user selfie </td>
                                        <td><img width={"100px"} height={"100px"} src={data?.field12?.url} alt="" /></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div className='view_detail_thanks'>
                <span className='view_other_category' onClick={() => { navigate('/'); localStorage.removeItem("category1") }}>Back to search</span>
            </div>
        </div>
    )
}

export default CategoryDetails