import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../assets/css/view_details/CategoryDetails.css'
import { useNavigate } from 'react-router-dom'

const CategoryDetails = () => {
    const [data, setData] = useState()
    console.log("data---->", data?.field11?.url);
    const navigate = useNavigate()
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])
    return (
        <div className='view_details_main'>
            <div className='view_detail_heading'>View Details</div>
            <div className='view_details_container'>
                <div className='view_details_div_main'>
                    <div>UID</div>
                    <div>{data?.uid}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>NAME</div>
                    <div>{data?.name}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>NUMBER</div>
                    <div>{data?.number}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>ADDRESS</div>
                    <div>{data?.address}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>UID</div>
                    <div>{data?.uid}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD1</div>
                    <div>{data?.field1}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD2</div>
                    <div>{data?.field2}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD3</div>
                    <div>{data?.field3}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD4</div>
                    <div>{data?.field4}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD5</div>
                    <div>{data?.field5}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD6</div>
                    <div>{data?.field6}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD7</div>
                    <div>{data?.field7}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD8</div>
                    <div>{data?.field8}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD9</div>
                    <div>{data?.field9}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD10</div>
                    <div>{data?.field10}</div>
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD11</div>
                    {/* <div>{data?.url}</div> */}
                    <img src={data?.field11?.url} height={100} width={100} />
                </div>
                <div className='view_details_div_main'>
                    <div>FIELD12</div>
                    <img src={data?.field12?.url} height={100} width={100} />
                    {/* <div>{data?.url}</div> */}
                </div>
            </div>
            <div><h2>Submited Successfully</h2></div>
            <div className='view_detail_thanks'>
                <span className='view_details_message'>Thanks for using</span>
                <span className='view_other_category' onClick={() => { navigate('/'); localStorage.removeItem("category1") }}>Go To Home</span>
            </div>
        </div>
    )
}

export default CategoryDetails