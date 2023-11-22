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

const AddCategory1 = () => {
    const webcamRef = useRef(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureImage, setCaptureImage] = useState("")
    const { open, setOpen, setCat } = FindState()
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

    const validUID = (uid) =>{
        return uid.trim() !== ''
    }

    const validName = (name) =>{
         return name.trim() !== ''
    }

    const validNumber = (number) =>{
    return number.trim !== ''
    }
    const validAddress = (address)=>{
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

    const onSubmit = (event) => {
        event.preventDefault();
        try {
            if(!validUID(formData.uid)){
                toast.error("enter a valid uid");
            }
            if(!validName(formData.name)){
                toast.error("enter a valid name");
            }
            if(!validNumber(formData.number)){
                toast.error('enter a valid number')
            }
            if(!validAddress(formData.address)){
                toast.error("enter a valid address")
            }

           else{
            localStorage.setItem("category1", JSON.stringify(formData));
            setOpen(false)
            setCat(1)
            navigate('/otpverification')
           }
            
        } catch (error) {
            console.log('error');
            
        }
    };

    
    return (
        <>
            <Grid className="p-3">
                <Paper elevation={20} className="paperStyle">
                    <Grid align="center" >
                        <h2 className="headerStyle">Add Category1 Report</h2>
                        <span className='addcategory_icon' onClick={() => setOpen(false)}><CloseIcon /></span>
                    </Grid>
                    <div className="container">
                        <form className="row mb-3" onSubmit={onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Grid>
                                        <TextField
                                            label="UID "
                                            variant="standard"
                                            value={formData.uid}
                                            fullWidth
                                            type="text"
                                            name="uid"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Grid>

                                    <Grid>
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
                                            required
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field1"
                                            variant="standard"
                                            value={formData.field1}
                                            fullWidth
                                            type="text"
                                            name="field1"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field3"
                                            variant="standard"
                                            value={formData.field3}
                                            fullWidth
                                            type="text"
                                            name="field3"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field5"
                                            variant="standard"
                                            value={formData.field5}
                                            fullWidth
                                            type="text"
                                            name="field5"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field7"
                                            variant="standard"
                                            value={formData.field7}
                                            fullWidth
                                            type="text"
                                            name="field7"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field9"
                                            variant="standard"
                                            value={formData.field9}
                                            fullWidth
                                            type="text"
                                            name="field9"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
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
                                                            <IconButton onClick={() => uploadImages()} style={{ fontSize: '15px', padding: '2px 10px', backgroundColor: '#1976d2', borderRadius: '2px', color: 'white' }}>
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
                                    <Grid>
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
                                            required
                                        />
                                    </Grid>

                                    <Grid>
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
                                            required
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field2"
                                            variant="standard"
                                            value={formData.field2}
                                            fullWidth
                                            type="text"
                                            name="field2"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field4"
                                            variant="standard"
                                            value={formData.field4}
                                            fullWidth
                                            type="text"
                                            name="field4"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field6"
                                            variant="standard"
                                            value={formData.field6}
                                            fullWidth
                                            type="text"
                                            name="field6"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field8"
                                            variant="standard"
                                            value={formData.field8}
                                            fullWidth
                                            type="text"
                                            name="field8"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid>
                                        <TextField
                                            label="field10"
                                            variant="standard"
                                            value={formData.field10}
                                            fullWidth
                                            type="text"
                                            name="field10"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>

                                    <Grid className="my-2">

                                        <div className="text-center my-2">
                                            {isLoading2 ? (
                                                <div className=" d-flex justify-content-center align-items-center ">
                                                    <Loader />
                                                </div>
                                            ) : (
                                                <button type='button' onClick={() => setShowWebcam(true)}
                                                    style={{ fontSize: '14px', padding: '5px 10px', backgroundColor: '#1976d2', borderRadius: '2px', color: 'white', border: '1px solid' }}
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

                                                <button type='button' onClick={captureSelfie}
                                                    style={{ fontSize: '14px', padding: '5px 10px', backgroundColor: '#1976d2', borderRadius: '2px', color: 'white', border: '1px solid' }}>
                                                    Capture Selfie
                                                </button>
                                            </div>
                                        )}
                                    </Grid>

                                </Grid>
                            </Grid>
                            <div className="text-center my-2 mt-4">
                                <Button variant="contained" type="submit" className="m-2" >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </>
    );
};

export default AddCategory1;
