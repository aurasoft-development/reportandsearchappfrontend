import { Button, FormControl, Grid, IconButton, Input, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import '../../assets/css/form/AddCategory1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from 'react-webcam';
import { FindState } from '../../context/FindContext';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import OtpVarifacation from '../home/OtpVarifacation';
import commonApiRequest from '../../api/commonApi';
import { dataURItoBlob, uploadImages } from '../../utils/UploadImage';
import CircularProgress from '@mui/material/CircularProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const FirstForm = () => {
    const webcamRef = useRef(null);

    // State variables for webcam, captured image, form data, loading states, and navigation
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureImage, setCaptureImage] = useState("")
    const { open, setOpen, step, setStep } = FindState()
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false)
    const [complainRegistered, setComplainRegistered] = useState('');
    // const [selectedDate, setSelectedDate] = useState("")
    const [imeiNoError, setImeiNoError] = useState("")

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        iMEINo: '',
        make: '',
        colour: '',
        model: '',
        selectedDate: [],
    });


    const validName = (make) => {
        return make.trim() !== ''
    }

    const validmodel = (model) => {
        return model.trim !== ''
    }
    const validcolour = (colour) => {
        return colour.trim() !== ''
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
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleValidation = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        if (/^\d{15}$/.test(value)) {
            setImeiNoError('')
        } else {
            return setImeiNoError('Invalid IMEI Number')
        }
    };
    // function to get selected value of complain registered
    const handleRadioChange = (event) => {
        setComplainRegistered(event.target.value);
    };

    // Validation function for form fields
    const validationFunction = () => {
        try {
            if (imeiNoError) {
                return toast.error("Invalid IMEI Number.");
            }
            if (!validName(formData.make)) {
                return toast.error("field is required.");
            }
            if (!validmodel(formData.model)) {
                return toast.error('field is required.')
            }
            if (!validcolour(formData.colour)) {
                return toast.error("field is required.")
            }
            setStep(step + 2)
        } catch (error) {
            console.log('error');


        }
    }

    // Function to submit the form data
    const onSubmit = async (value) => {
        try {
            const info = value == 1 ? {
                iMEINo: formData?.iMEINo,
                make: formData?.make,
                model: formData?.model,
                colour: formData?.colour,
            } : {
                iMEINo: formData?.iMEINo,
                make: formData?.make,
                model: formData?.model,
                colour: formData?.colour,
                complainNumber: formData?.complainNumber,
                complainDetails: formData?.complainDetails,
                city: formData?.city,
                country: formData?.country,
                ownerName: formData?.ownerName,
                ownerNumber: formData?.ownerNumber,
                selectedDate: formData?.selectedDate,
                purchaseBillNumber: formData?.purchaseBillNumber,
                purchaseCost: formData?.purchaseCost,
                field11: formData?.field11,
                field12: formData?.field12
            }

            await commonApiRequest('post', '/api/add_categories', info);
            toast.success('Report added Successfully.')
            localStorage.setItem("category1", JSON.stringify(formData));
            navigate('/alldetails')

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    return (
        <>
            <Grid className="p-3">
                <Paper elevation={20} className="paperStyle">
                    <Grid align="center" className='m-2' >
                        {step == 2 ? <h5 className="headerStyle">Please verify your mobile model</h5> : <h4 className="headerStyle">Add Category 1 Report</h4>}
                        <span className='addcategory_icon' onClick={() => setOpen(false)}>{step == 1}</span>
                    </Grid>
                    <div className="container FormParent">
                        <Grid container spacing={2} className='FormChild'>

                            {/* Conditionally rendering form fields based on step */}
                            {step == 1 &&
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="IMEI No"
                                            variant="standard"
                                            color='success'
                                            value={formData.iMEINo}
                                            fullWidth
                                            type="text"
                                            name="iMEINo"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleValidation}
                                            error={!!imeiNoError}
                                            helperText={imeiNoError}
                                            required
                                        />
                                        {/* {imeiNoError !== '' && <p style={{ color: 'red' }}>{imeiNoError}</p>} */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="model "
                                            variant="standard"
                                            type='text'
                                            value={formData.model}
                                            fullWidth
                                            name="model"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Make"
                                            variant="standard"
                                            value={formData.make}
                                            fullWidth
                                            type="text"
                                            name="make"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            label="Colour"
                                            variant="standard"
                                            value={formData.colour}
                                            fullWidth
                                            type="text"
                                            name="colour"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            color='success'
                                            required
                                        />
                                    </Grid>
                                    <div className="text-center my-2 mt-4">
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => validationFunction()}>
                                            Save
                                        </Button>
                                    </div>
                                </>
                            }
                            {
                                step == 2 &&
                                <div className="OtpParent" >
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
                                    <h4>Optional Information</h4>
                                    <Grid>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Complain Registered</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                onChange={handleRadioChange}
                                                value={complainRegistered}
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid container spacing={2} className='d-flex flex-row gap-0 '>

                                        <Grid item xs={6}>
                                            {complainRegistered === 'Yes' && (
                                                <Grid item xs={12}>
                                                    <TextField
                                                        label="Complain Number"
                                                        variant="standard"
                                                        value={formData.complainNumber}
                                                        fullWidth
                                                        type="text"
                                                        name="complainNumber"
                                                        autoComplete="off"
                                                        className="my-2"
                                                        onChange={handleInputChange}
                                                        color='success'
                                                    />
                                                </Grid>
                                            )}


                                            <Grid>
                                                <TextField
                                                    label="City"
                                                    variant="standard"
                                                    value={formData.city}
                                                    fullWidth
                                                    type="text"
                                                    name="city"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Owner Name"
                                                    variant="standard"
                                                    value={formData.ownerName}
                                                    fullWidth
                                                    type="text"
                                                    name="ownerName"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>
                                            <Grid className='date'>
                                                <TextField
                                                    label="Purchase Bill Date"
                                                    variant="standard"
                                                    onChange={handleInputChange}
                                                    value={formData.selectedDate}
                                                    name='selectedDate'
                                                    fullWidth
                                                    type='date'
                                                    autoComplete="off"
                                                    className="my-2"
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Purchase Cost"
                                                    variant="standard"
                                                    value={formData.purchaseCost}
                                                    fullWidth
                                                    type="text"
                                                    name="purchaseCost"
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
                                                                    <CircularProgress size="2rem" />
                                                                </div>
                                                            ) : (
                                                                <InputAdornment position="end">
                                                                    <IconButton className='mainButton' onClick={() => upload()}
                                                                        style={{ fontSize: '15px', padding: '2px 10px', backgroundColor: '#2e7d32', borderRadius: '2px', color: 'white' }}
                                                                    >
                                                                        Upload
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            )}
                                                        </div>
                                                    }
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>

                                            {complainRegistered === 'Yes' && (
                                                <Grid >
                                                    <TextField
                                                        label="Complain Details"
                                                        variant="standard"
                                                        value={formData.complainDetails}
                                                        fullWidth
                                                        type="text"
                                                        name="complainDetails"
                                                        autoComplete="off"
                                                        className="my-2"
                                                        onChange={handleInputChange}
                                                        color='success'
                                                    />
                                                </Grid>
                                            )}


                                            <Grid>
                                                <TextField
                                                    label="Country"
                                                    variant="standard"
                                                    value={formData.country}
                                                    fullWidth
                                                    type="text"
                                                    name="country"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Owner Number"
                                                    variant="standard"
                                                    value={formData.ownerNumber}
                                                    fullWidth
                                                    type="text"
                                                    name="ownerNumber"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>

                                            <Grid>
                                                <TextField
                                                    label="Purchase Bill Number"
                                                    variant="standard"
                                                    value={formData.purchaseBillNumber}
                                                    fullWidth
                                                    type="text"
                                                    name="purchaseBillNumber"
                                                    autoComplete="off"
                                                    className="my-2"
                                                    onChange={handleInputChange}
                                                    color='success'
                                                />
                                            </Grid>
                                            <Grid className="my-2">

                                                <div className=" my-2">
                                                    {
                                                        showWebcam === true ? "" : < Button type='button' className='mainButton' onClick={() => setShowWebcam(true)}>
                                                            Capture Image
                                                        </Button>
                                                    }
                                                </div>

                                                {showWebcam && (
                                                    <div className='webcam-div'>
                                                        <Webcam
                                                            height={100}
                                                            audio={false}
                                                            ref={webcamRef}
                                                        />
                                                        <div style={{ width: '25%' }}>
                                                            {
                                                                isLoading2
                                                                    ?
                                                                    <div className="d-flex justify-content-center">
                                                                        <CircularProgress size="2rem" />
                                                                    </div>
                                                                    :
                                                                    <Button type='button' className='mainButton1' onClick={captureSelfie}>
                                                                        Capture Selfie
                                                                    </Button>
                                                            }
                                                        </div>

                                                    </div>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <div className="d-flex justify-content-around w-100 mt">
                                        <Button variant="contained" onClick={() => { onSubmit(1); setOpen(false); setStep(1) }} className="m-2 mainButton" >
                                            Skip
                                        </Button>
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => { onSubmit(2); setOpen(false); setStep(1) }} >
                                            Submit
                                        </Button>
                                    </div>
                                </>
                            }
                        </Grid>
                    </div>
                </Paper>
            </Grid >
        </>
    )
}

export default FirstForm