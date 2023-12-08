// Importing necessary dependencies and components from Material-UI, React, and other libraries
import { Button, FormControl, Grid, IconButton, Input, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import '../../assets/css/form/AddCategory1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from 'react-webcam';
import { FindState } from '../../context/FindContext';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../common/Loader';
import OtpVarifacation from '../home/OtpVarifacation';
import commonApiRequest from '../../api/commonApi';
import { dataURItoBlob, uploadImages } from '../../utils/UploadImage';

// Functional component for adding Category4 report
const ForthForm  = () => {
    const webcamRef = useRef(null);

    // State variables for webcam, captured image, form data, loading states, and navigation
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureImage, setCaptureImage] = useState("")
    const { open, setOpen4, step, setStep } = FindState()
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [formData, setFormData] = useState({
        uid: '',
        name: '',
        address: '',
        number: '',
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        field11: {},
        field12: {}
    });

    // Validation functions for form fields
    const validUID = (uid) => {
        return uid.trim() !== ''
    }

    const validName = (name) => {
        return name.trim() !== ''
    }

    const validNumber = (number) => {
        return number.trim !== ''
    }
    const validAddress = (address) => {
        return address.trim() !== ''
    }

    // Function to capture selfie using webcam
    const captureSelfie = async () => {
        if (webcamRef.current) {
            setIsLoading2(true);
            const imageSrc = webcamRef.current.getScreenshot();
            const response = await uploadImages(dataURItoBlob(imageSrc))
            if (response) {
                setFormData((oldValue) => {
                    return {
                        ...oldValue,
                        field12: response.data
                    }
                })
                toast.success("File uploaded successfully")
                setIsLoading2(false);
            }
        }
        setShowWebcam(false);
    };

    // Function to upload captured images
    const upload = async () => {
        if (!captureImage) {
            toast.warn("Please Choose File.")
        } else {
            setIsLoading(true);
            const response = await uploadImages(captureImage)
            if (response) {
                setFormData((oldValue) => {
                    return {
                        ...oldValue,
                        field11: response.data
                    }
                })
                toast.success("File uploaded successfully")
                setIsLoading(false);
            }
        }
    }

    // Event handler for form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validation function for form fields
    const validationFunction = () => {
        try {
            if (!validUID(formData.uid)) {
                return toast.error("Enter valid UID.");
            }
            if (!validName(formData.name)) {
                return toast.error("Enter valid name.");
            }
            if (!validNumber(formData.number)) {
                return toast.error('Enter valid number.')
            }
            if (!validAddress(formData.address)) {
                return toast.error("Enter valid address.")
            }
            setStep(step + 1)
        } catch (error) {
            console.log('error');

        }
    }

    // Function to submit the form data
    const onSubmit = async (value) => {
        try {
            const info = value == 1 ? {
                uid: formData?.uid,
                name: formData?.name,
                number: formData?.number,
                address: formData?.address,
            } : {
                uid: formData?.uid,
                name: formData?.name,
                number: formData?.number,
                address: formData?.address,
                field1: formData?.field1,
                field2: formData?.field2,
                field3: formData?.field3,
                field4: formData?.field4,
                field5: formData?.field5,
                field6: formData?.field6,
                field7: formData?.field7,
                field8: formData?.field8,
                field9: formData?.field9,
                field10: formData?.field10,
                field11: formData?.field11,
                field12: formData?.field12
            }

            await commonApiRequest('post', '/api/cat4/add_categories', info);
            toast.success('Report added Successfully.')
            localStorage.setItem("category1", JSON.stringify(formData));
            navigate('/category_details')

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    // Rendering the component
    return (
        <>
            <Grid className="p-3">
                <Paper elevation={20} className="paperStyle">
                    <Grid align="center" className='m-2'>
                        {step == 2 ? <h5 className="headerStyle">Please verify your mobile number</h5> : <h4 className="headerStyle">Add Category 4 Report</h4>}
                        <span className='addcategory_icon' onClick={() => setOpen4(false)}>{step == 1 }</span>
                    </Grid>
                    <div className="container FormParent" >
                        <Grid container spacing={2} className='FormChild'>

                            {/* Conditionally rendering form fields based on step */}
                            {step == 1 &&
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="UID"
                                            variant="standard"
                                            value={formData.uid}
                                            fullWidth
                                            type="text"
                                            name="uid"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Number "
                                            variant="standard"
                                            type='number'
                                            value={formData.number}
                                            fullWidth
                                            name="number"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Name"
                                            variant="standard"
                                            value={formData.name}
                                            fullWidth
                                            type="text"
                                            name="name"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Address"
                                            variant="standard"
                                            value={formData.address}
                                            fullWidth
                                            type="text"
                                            name="address"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>
                                    <div className="text-center my-2 mt-4">
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() =>
                                            validationFunction()
                                        } >
                                            Save
                                        </Button>
                                    </div>
                                </>
                            }
                            {
                                step == 2 &&
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className='otp-verification'> <OtpVarifacation /></div>

                                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => setStep(step - 1)} >
                                            Back
                                        </Button>
                                    </div>
                                </div>

                            }
                            {
                                step == 3 &&
                                <>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Grid>
                                                <TextField
                                                    label="Field1"
                                                    variant="standard"
                                                    value={formData.field1}
                                                    fullWidth
                                                    type="text"
                                                    name="field1"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field3"
                                                    variant="standard"
                                                    value={formData.field3}
                                                    fullWidth
                                                    type="text"
                                                    name="field3"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field5"
                                                    variant="standard"
                                                    value={formData.field5}
                                                    fullWidth
                                                    type="text"
                                                    name="field5"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field7"
                                                    variant="standard"
                                                    value={formData.field7}
                                                    fullWidth
                                                    type="text"
                                                    name="field7"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field9"
                                                    variant="standard"
                                                    value={formData.field9}
                                                    fullWidth
                                                    type="text"
                                                    name="field9"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <FormControl variant="standard" className="my-2">
                                                <Input
                                                    className='form_input'
                                                    type={'file'}
                                                    name='password'
                                                    onChange={(e) => setCaptureImage(e.target.files[0])}
                                                    endAdornment={
                                                        <div className="text-center my-2 ">
                                                            {isLoading ? (
                                                                <div className=" d-flex justify-content-center align-items-center ">
                                                                    <Loader />
                                                                </div>
                                                            ) : (
                                                                <InputAdornment position="end">
                                                                    <IconButton className='mainButton' onClick={() => upload()} style={{ fontSize: '15px', padding: '2px 10px', backgroundColor: '#2e7d32', borderRadius: '2px', color: 'white' }}>
                                                                        upload
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            )}
                                                        </div>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid >
                                                <TextField
                                                    label="Field2"
                                                    variant="standard"
                                                    value={formData.field2}
                                                    fullWidth
                                                    type="text"
                                                    name="field2"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field4"
                                                    variant="standard"
                                                    value={formData.field4}
                                                    fullWidth
                                                    type="text"
                                                    name="field4"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field6"
                                                    variant="standard"
                                                    value={formData.field6}
                                                    fullWidth
                                                    type="text"
                                                    name="field6"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field8"
                                                    variant="standard"
                                                    value={formData.field8}
                                                    fullWidth
                                                    type="text"
                                                    name="field8"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Field10"
                                                    variant="standard"
                                                    value={formData.field10}
                                                    fullWidth
                                                    type="text"
                                                    name="field10"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid className="my-2">

                                                <div className="text-center my-2">
                                                    {isLoading2 ? (
                                                        <div className=" d-flex justify-content-center align-items-center ">
                                                            <Loader />
                                                        </div>
                                                    ) : (
                                                        <Button type='button' className='mainButton' onClick={() => setShowWebcam(true)}
                                                        >Capture Your Selfie
                                                        </Button>
                                                    )}
                                                </div>

                                                {showWebcam && (
                                                    <div>
                                                        <Webcam
                                                            height={100}
                                                            audio={false}
                                                            ref={webcamRef}
                                                        />

                                                        <button type='button' className='mainButton' onClick={captureSelfie}
                                                            style={{ fontSize: '14px', padding: '2px 10px', backgroundColor: '#2e7d32', borderRadius: '2px', color: 'white', border: '1px solid' }}>
                                                            Capture Selfie
                                                        </button>
                                                    </div>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <div className="d-flex justify-content-around w-100 mt">
                                        <Button variant="contained" onClick={() => { onSubmit(1); setOpen4(false); setStep(1) }} className="m-2 mainButton" >
                                            Skip
                                        </Button>
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => { onSubmit(2); setOpen4(false); setStep(1) }} >
                                            Submit
                                        </Button>
                                    </div>
                                </>
                            }
                        </Grid>
                    </div>
                </Paper>
            </Grid>
        </>
    );
};

// Exporting the component
export default ForthForm ;
