import React, { useEffect, useState } from 'react'
import '../../assets/css/OtpVarifacation.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Alert, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FindState } from '../../context/FindContext'

const OtpVarifacation = () => {
    const [number, setNumber] = useState()
    const [otp, setOtp] = useState("")
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState("");
    const [confirmObj, setConfirmObj] = useState("");
    const [data, setData] = useState()
    const { setUpRecaptcha, step, setStep } = FindState();
    const navigate = useNavigate()


    useEffect(() => {
        const Info = JSON.parse(localStorage.getItem('category1'))
        setData(Info)
    }, [])

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
                        <div className='btn-div'>
                            <Button variant="contained" color="success" onClick={() => getOtp(number)}>Send Otp</Button>
                        </div>
                        <div id='recaptcha-container'></div>
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
                        <div className='verify-otp-btn'> <Button variant="contained" color="success" onClick={() => verifyOtp()}>verify otp</Button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OtpVarifacation