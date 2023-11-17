import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import '../../assets/css/form/AddCategory1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from 'react-webcam';
import CloseIcon from '@mui/icons-material/Close';
import { FindState } from '../../context/FindContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddCategory1 = () => {
    const webcamRef = useRef(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureSelfies, setCaptureSelfies] = useState("")
    const { open, setOpen, setCat } = FindState()
    const navigate = useNavigate();
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
        field11: '',
        field12: ''
    });

    const captureSelfie = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log("capture img path", imageSrc);

            const apiUrl = 'http://localhost:5000/api/user/upload_image';

            const formData = new FormData();
            formData.append('files', dataURItoBlob(imageSrc));

            axios.post(apiUrl, formData)
                .then(response => {
                    console.log('Image uploaded successfully:', response.data);
                   setFormData((oldValue)=>{
                  return{
                    ...oldValue,
                    field12:response.data
                  }
                   })
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });
        }
        setShowWebcam(false);
    };

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("category1", JSON.stringify(formData));
        setOpen(false)
        setCat(1)
        navigate('/otpverification')
    };

    function handleTakePhotoAnimationDone(dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
    }
    function handleCameraError(error) {
        console.log('handleCameraError', error);
    }
    function handleCameraStart(stream) {
        console.log('handleCameraStart');
    }
    function handleCameraStop() {
        console.log('handleCameraStop');
    }
    function handleTakePhoto(dataUri) {
        console.log('takePhoto', dataUri);
        setShowWebcam(false)
        handleCameraStop()
    }

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
                                    <Grid>
                                        <TextField
                                            label="field11"
                                            variant="standard"
                                            value={formData.field11}
                                            fullWidth
                                            type="file"
                                            name="field11"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
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
                                            value={formData.field3}
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
                                            value={formData.address}
                                            fullWidth
                                            type="text"
                                            name="field10"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <label className="my-2">Capture your selfie

                                        <Grid className="my-2"  >
                                            <button className="my-2" onClick={() => setShowWebcam(true)}>Open Webcam</button>
                                            {showWebcam && (
                                                <div>
                                                    <Webcam
                                                        height={100}
                                                        audio={false}
                                                        ref={webcamRef}
                                                    />
                                                    <button onClick={captureSelfie}>Capture Selfie</button>
                                                </div>
                                            )}
                                        </Grid>
                                    </label>
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