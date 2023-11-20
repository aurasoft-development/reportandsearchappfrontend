import React, { useEffect, useState } from 'react'
import '../../assets/css/OtpVarifacation.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Alert, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FindState } from '../../context/FindContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import commonApiRequest from '../../api/commonApi'

const OtpVarifacation = () => {
    const [number, setNumber] = useState()
    const [otp, setOtp] = useState("")
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState("");
    const [confirmObj, setConfirmObj] = useState("");
    const [data, setData] = useState()
    const { setUpRecaptcha, cat } = FindState();
    const navigate = useNavigate()

    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])
    const postCategory = async () => {
        try {
            const info = {
                uid: data?.uid,
                name: data?.name,
                number: data?.number,
                address: data?.address,
                field1: data?.field1,
                field2: data?.field2,
                field3: data?.field3,
                field4: data?.field4,
                field5: data?.field5,
                field6: data?.field6,
                field7: data?.field7,
                field8: data?.field8,
                field9: data?.field9,
                field10: data?.field10,
                field11: data?.field11,
                field12: data?.field12
            }

            await commonApiRequest('post', '/api/add_categories', info);
            toast.success('Report added Successfully.')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    }
    const postCategory2 = async () => {
        try {
            const info = {
                uid: data?.uid,
                name: data?.name,
                number: data?.number,
                address: data?.address,
                field1: data?.field1,
                field2: data?.field2,
                field3: data?.field3,
                field4: data?.field4,
                field5: data?.field5,
                field6: data?.field6,
                field7: data?.field7,
                field8: data?.field8,
                field9: data?.field9,
                field10: data?.field10,
                field11: data?.field11,
                field12: data?.field12
            }
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/cat2/add_categories`, info);
            await commonApiRequest('post', '/api/cat2/add_categories', info);
            toast.success('Report added Successfully.')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    }
    const postCategory3 = async () => {
        try {
            const info = {
                uid: data?.uid,
                name: data?.name,
                number: data?.number,
                address: data?.address,
                field1: data?.field1,
                field2: data?.field2,
                field3: data?.field3,
                field4: data?.field4,
                field5: data?.field5,
                field6: data?.field6,
                field7: data?.field7,
                field8: data?.field8,
                field9: data?.field9,
                field10: data?.field10,
                field11: data?.field11,
                field12: data?.field12
            }
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/cat3/add_categories`, info);
            await commonApiRequest('post', '/api/cat3/add_categories', info);
            toast.success('Report added Successfully.')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    }
    const postCategory4 = async () => {
        try {
            const info = {
                uid: data?.uid,
                name: data?.name,
                number: data?.number,
                address: data?.address,
                field1: data?.field1,
                field2: data?.field2,
                field3: data?.field3,
                field4: data?.field4,
                field5: data?.field5,
                field6: data?.field6,
                field7: data?.field7,
                field8: data?.field8,
                field9: data?.field9,
                field10: data?.field10,
                field11: data?.field11,
                field12: data?.field12
            }
            // await axios.post(`${import.meta.env.VITE_API_URL}/api/cat4/add_categories`, info);
            await commonApiRequest('post', '/api/cat4/add_categories', info);
            toast.success('Report added Successfully.')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    }

    const getOtp = async (number) => {
        setError("");
        if (number === "" || number === undefined)
            return setError("please enter a valid Phone Number")
        try {
            const response = await setUpRecaptcha(number);
            setConfirmObj(response)
            setFlag(true)
        } catch (err) {
            setError(err.message)
        }
    }
    const verifyOtp = async () => {
        if (otp === "" || otp === null) return;
        try {
            setError("")
            await confirmObj.confirm(otp)
            if (cat == 1) {
                postCategory()
                navigate('/category_details')
            } else if (cat == 2) {
                postCategory2()
                navigate('/category_details')
            } else if (cat == 3) {
                postCategory3()
                navigate('/category_details')
            }
            else if (cat == 4) {
                postCategory4()
                navigate('/category_details')
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className='opt_container'>
            <div className='otp_wrapper'>
                {error && <Alert variant="danger">{error}</Alert>}
                <div style={{ display: !flag ? "block" : "none" }} >
                    <div className='send_otp'>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={number}
                            defaultCountry='IN'
                            onChange={setNumber}
                        />
                        <div id='recaptcha-container'></div>
                    </div>
                    <div className='btn-div'>
                        {/* <Button variant="outlined" color="error">Cancel</Button> */}
                        <Button variant="contained" color="success" onClick={() => getOtp(number)}>Send Otp</Button>
                    </div>
                </div>
                <div className='verify_otp'
                    style={{ display: flag ? "block" : "none" }}
                >
                    <div className='otp-btn'>
                        <input type='text'
                            placeholder="Enter otp"
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <div className='verify-otp-btn'> <Button variant="contained" color="secondary" onClick={() => verifyOtp()}>verify otp</Button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OtpVarifacation