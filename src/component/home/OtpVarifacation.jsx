// Importing necessary dependencies and components from React, Material-UI, and external libraries
import React, { useEffect, useState } from 'react'
import '../../assets/css/OtpVarifacation.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Alert, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FindState } from '../../context/FindContext'

// Functional component for OTP verification
const OtpVarifacation = () => {

    // State variables to manage phone number, OTP input, flags, error messages, and confirmation object
    const [number, setNumber] = useState()
    const [otp, setOtp] = useState("")
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState("");
    const [confirmObj, setConfirmObj] = useState("");
    const [data, setData] = useState()

    // Accessing state and functions from context and navigation hook
    const { setUpRecaptcha, step, setStep } = FindState();
    const navigate = useNavigate()

    // useEffect to retrieve category1 data from local storage on component mount
    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])

    // Function to request OTP with the provided phone number
    const getOtp = async (number) => {
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number.")
        try {
            const response = await setUpRecaptcha(number);
            setConfirmObj(response)
            setFlag(true)

        } catch (err) {
            setError(err.message)
        }
    }

    // Function to verify the entered OTP
    const verifyOtp = async () => {
        if (otp === "" || otp === null) return;
        try {
            setError("")
            await confirmObj.confirm(otp)
            setStep(step + 1)
        } catch (err) {
            setError(err.message)
        }
    }

    // Render the OTP verification component
    return (
        <div className='opt_container'>
            <div className='otp_wrapper'>

                {/* Display error message if present */}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* Display section for sending OTP */}
                <div style={{ display: !flag ? "block" : "none" }} >
                    <div className='send_otp'>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={number}
                            defaultCountry='IN'
                            onChange={setNumber}
                        />
                        <div className='btn-div'>
                            <Button variant="contained" className='mainButton' onClick={() => getOtp(number)}>Send Otp</Button>
                        </div>

                        {/* Container for reCAPTCHA */}
                        <div id='recaptcha-container'></div>
                    </div>
                </div>

                {/* Display section for verifying OTP */}
                <div className='verify_otp'
                    style={{ display: flag ? "block" : "none" }}
                >
                    <div className='otp-btn'>
                        <input type='text'
                            placeholder="Enter otp"
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <div className='verify-otp-btn'> <Button className='mainButton' variant="contained" onClick={() => verifyOtp()}>verify otp</Button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

// Exporting the OTP verification component
export default OtpVarifacation