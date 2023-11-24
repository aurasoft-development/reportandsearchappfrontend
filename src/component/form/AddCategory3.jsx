import { Button, FormControl, Grid, IconButton, Input, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import '../../assets/css/form/AddCategory1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from 'react-webcam';
import CloseIcon from '@mui/icons-material/Close';
import { FindState } from '../../context/FindContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../common/Loader';
import OtpVarifacation from '../home/OtpVarifacation';
import commonApiRequest from '../../api/commonApi';

const AddCategory3 = () => {
    const webcamRef = useRef(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureImage, setCaptureImage] = useState("")
    const { open, setOpen3, step, setStep } = FindState()
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

    // Function to convert data URI to Blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }
        return new Blob([arrayBuffer], { type: mimeString });
    };

    const captureSelfie = () => {
        if (webcamRef.current) {
            setIsLoading2(true);
            const imageSrc = webcamRef.current.getScreenshot();

            const apiUrl = `${import.meta.env.VITE_API_URL}/api/user/upload_image`;

            const formData = new FormData();
            formData.append('files', dataURItoBlob(imageSrc));

            axios.post(apiUrl, formData)
                .then(response => {
                    setFormData((oldValue) => {
                        return {
                            ...oldValue,
                            field12: response.data
                        }
                    })
                    toast.success("File uploaded successfully.")
                    setIsLoading2(false);
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                    setIsLoading2(false);
                });
        }
        setShowWebcam(false);
    };

    const uploadImages = () => {
        setIsLoading(true);
        const apiUrl = `${import.meta.env.VITE_API_URL}/api/user/upload_image`;
        const formData = new FormData();
        formData.append('files', captureImage);

        axios.post(apiUrl, formData)
            .then(response => {
                setFormData((oldValue) => {
                    return {
                        ...oldValue,
                        field11: response.data
                    }
                })
                toast.success("File uploaded successfully")
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                setIsLoading(false);
            })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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

    const onSubmit = async () => {
        try {
            const info = {
                uid: formData?.uid,
                name: formData?.name,
                number: formData?.number,
                address: formData?.address,
            }

            await commonApiRequest('post', '/api/cat3/add_categories', info);
            toast.success('Report added Successfully.')
            localStorage.setItem("category1", JSON.stringify(formData));
            navigate('/category_details')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    };
    const onSubmit1 = async () => {
        try {
            const info = {
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

            await commonApiRequest('post', '/api/cat3/add_categories', info);
            toast.success('Report added Successfully.')
            localStorage.setItem("category1", JSON.stringify(formData));
            navigate('/category_details')

        } catch (error) {
            toast.error("Error fetching the chat")
        }
    };


    return (
        <>
            <Grid className="p-3">
                <Paper elevation={20} className="paperStyle">
                    <Grid align="center" >
                        {step == 2 ? <h4 className="headerStyle">Please verify your mobile number.</h4> : <h2 className="headerStyle">Add Category 3 Report</h2>}
                        <span className='addcategory_icon' onClick={() => setOpen3(false)}><CloseIcon /></span>
                    </Grid>
                    <div className="container">
                        <Grid container spacing={2}>
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
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => validationFunction()} >
                                            Save
                                        </Button>
                                    </div>
                                </>
                            }
                            {
                                step == 2 &&
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className='otp-verification'> <OtpVarifacation /></div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
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
                                                                    <IconButton className='mainButton' onClick={() => uploadImages()} style={{ fontSize: '15px', padding: '2px 10px', backgroundColor: '#2e7d32', borderRadius: '2px', color: 'white' }}>
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
                                                        <button type='button' className='mainButton' onClick={() => setShowWebcam(true)}
                                                            style={{ fontSize: '14px', padding: '2px 10px', backgroundColor: '#2e7d32', borderRadius: '2px', color: 'white', border: '1px solid', marginTop: '6px' }}
                                                        >Capture your selfie
                                                        </button>
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
                                        <Button variant="contained" onClick={() => { onSubmit(); setOpen3(false); setStep(1) }} className="m-2 mainButton" >
                                            Skip
                                        </Button>
                                        <Button variant="contained" type="submit" className="m-2 mainButton" onClick={() => { onSubmit1(); setOpen3(false); setStep(1) }} >
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

export default AddCategory3;
