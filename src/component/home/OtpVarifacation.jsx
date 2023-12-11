// // Importing necessary dependencies and components from React, Material-UI, and external libraries
// import React, { useEffect, useState } from 'react'
// import '../../assets/css/OtpVarifacation.css'
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
// import { Alert, Button } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import { FindState } from '../../context/FindContext'

// // Functional component for OTP verification
// const OtpVarifacation = () => {

//     // State variables to manage phone number, OTP input, flags, error messages, and confirmation object
//     const [number, setNumber] = useState()
//     const [otp, setOtp] = useState("")
//     const [flag, setFlag] = useState(false);
//     const [error, setError] = useState("");
//     const [confirmObj, setConfirmObj] = useState("");
//     const [data, setData] = useState()

//     // Accessing state and functions from context and navigation hook
//     const { setUpRecaptcha, step, setStep } = FindState();
//     const navigate = useNavigate()

//     // useEffect to retrieve category1 data from local storage on component mount
//     useEffect(() => {
//         const Info = JSON.parse(localStorage.getItem('category1'))
//         setData(Info)
//     }, [])

//     // Function to request OTP with the provided phone number
//     const getOtp = async (number) => {
//         setError("");
//         if (number === "" || number === undefined)
//             return setError("Please enter a valid phone number.")
//         try {
//             const response = await setUpRecaptcha(number);
//             setConfirmObj(response)
//             setFlag(true)

//         } catch (err) {
//             setError(err.message)
//         }
//     }

//     // Function to verify the entered OTP
//     const verifyOtp = async () => {
//         if (otp === "" || otp === null) return;
//         try {
//             setError("")
//             await confirmObj.confirm(otp)
//             setStep(step + 1)
//         } catch (err) {
//             setError(err.message)
//         }
//     }

//     // Render the OTP verification component
//     return (
//         // <div className='opt_container'>
//             <div className='otp_wrapper'>
//                 {/* Display error message if present */}
//                 {error && <Alert variant="danger">{error}</Alert>}

//                 {/* Display section for sending OTP */}
//                 <div style={{ display: !flag ? "block" : "none" }} >
//                     <div className='send_otp'>
//                         <PhoneInput
//                             placeholder="Enter phone number"
//                             value={number}
//                             defaultCountry='IN'
//                             onChange={setNumber}
//                         />
//                         <div className='btn-div'>
//                             <Button variant="contained" className='mainButton' onClick={() => getOtp(number)}>Send Otp</Button>
//                         </div>

//                         {/* Container for reCAPTCHA */}
//                         <div id='recaptcha-container'></div>
//                     </div>
//                 </div>

//                 {/* Display section for verifying OTP */}
//                 <div className='verify_otp'
//                     style={{ display: flag ? "block" : "none" }}
//                 >
//                     <div className='otp-btn'>
//                         <input type='text'
//                             placeholder="Enter otp"
//                             onChange={(e) => setOtp(e.target.value)}
//                         />
//                         <div className='verify-otp-btn'> <Button className='mainButton' variant="contained" onClick={() => verifyOtp()}>verify otp</Button></div>
//                     </div>
//                 </div>
//             </div>
//         // </div>

//     )
// }

// // Exporting the OTP verification component
// export default OtpVarifacation


// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
import React from 'react'
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { toast, Toaster } from "react-hot-toast";

const OtpVarifacation = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    // const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

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
        // setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // setLoading(false);
                setShowOTP(true);
                alert("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                // setLoading(false);
            });
    }

    function onOTPVerify() {
        // setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                // setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                // setLoading(false);
            });
    }

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
                <div id="recaptcha-container"></div>
                {user ? (
                    <h2 className="text-center text-white font-medium text-2xl">
                        👍Login Success
                    </h2>
                ) : (
                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                            Welcome to <br /> CODE A PROGRAM
                        </h1>
                        {showOTP ? (
                            <>
                                {/* <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div> */}
                                <label
                                    htmlFor="otp"
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                ></OtpInput>
                                <button
                                    onClick={onOTPVerify}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {/* {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )} */}
                                    <span>Verify OTP</span>
                                </button>
                            </>
                        ) : (
                            <>
                                {/* <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div> */}
                                <label
                                    htmlFor=""
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Verify your phone number
                                </label>
                                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                <button
                                    onClick={onSignup}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {/* {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )} */}
                                    <span>Send code via SMS</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default OtpVarifacation;
