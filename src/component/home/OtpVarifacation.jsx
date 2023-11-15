import React, { useState } from 'react'
import '../../assets/css/OtpVarifacation.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Button } from '@mui/material'

const OtpVarifacation = () => {
    const [number, setNumber] = useState()
    return (
        <div className='opt_container'>
            <div className='otp_wrapper'>
                <div className='send_otp' >
                    <div> <PhoneInput
                        placeholder="Enter phone number"
                        value={number}
                        defaultCountry='IN'
                        onChange={setNumber}
                    />
                        <div id='recaptcha-container'></div>
                    </div>
                    <div className='btn-div'>
                        <Button variant="outlined" color="error">Cancel</Button>
                        <Button variant="contained" color="success">Send Otp</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OtpVarifacation