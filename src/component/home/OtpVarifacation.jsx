// Importing necessary dependencies and components from React, Material-UI, and external libraries
import React, { useEffect, useState } from 'react'
import '../../assets/css/OtpVarifacation.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Alert, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FindState } from '../../context/FindContext'
import { toast } from 'react-toastify'
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";

const OtpVarifacation = () => {
  // State variables to manage phone number, OTP input, flags, error messages, and confirmation object
  const [number, setNumber] = useState()
  const [otp, setOtp] = useState("")
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState("");
  const [confirmObj, setConfirmObj] = useState("");
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  // Accessing state and functions from context and navigation hook
  const { setUpRecaptcha, step, setStep } = FindState();
  const navigate = useNavigate()

  // useEffect to retrieve category1 data from local storage on component mount
  useEffect(() => {
    const Info = JSON.parse(localStorage.getItem('category1'))
    setData(Info)
  }, [])


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true)
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    // const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false)
        toast.success("OTP sended successfully!");
        setFlag(true)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }

  function onOTPVerify() {
    setLoading(true)
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setLoading(false)
        setStep(step + 1)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }


  // Render the OTP verification component
  return (
    // <div className='opt_container'>
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
            {loading == true ? <CircularProgress /> : ""}
            <Button variant="contained" className='mainButton' onClick={() => onSignup()}>Send Otp</Button>
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
          <div className='verify-otp-btn'>
            {loading == true ? <CircularProgress /> : ""}
            <Button className='mainButton' variant="contained" onClick={() => onOTPVerify()}>verify otp</Button>
          </div>
        </div>
      </div>
    </div>
    // </div>

  )
}

// Exporting the OTP verification component
export default OtpVarifacation
