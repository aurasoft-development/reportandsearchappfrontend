import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';
import '../../assets/css/form/AddCategory1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from 'react-webcam';
import CloseIcon from '@mui/icons-material/Close';
import { FindState } from '../../context/FindContext';
// import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
const AddCategory3 = () => {
    const webcamRef = useRef(null);
    const [showWebcam, setShowWebcam] = useState(false);
    const { open3, setOpen3 } = FindState()
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
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("category3", JSON.stringify(formData));

    };
    const captureSelfie = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log('imgage we have capture', imageSrc);
        }
        setShowWebcam(false)
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
                        <h2 className="headerStyle">Add Category Report</h2>
                        <span className='addcategory_icon' onClick={() => setOpen3(false)}><CloseIcon /></span>
                    </Grid>
                    <div className="container">
                        <form className="row mb-3" onSubmit={onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Grid>
                                        <TextField
                                            label="UID "
                                            variant="standard"
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.uid}
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
                                            // value={formData.name}
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
                                            // value={formData.address}
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
                                            // value={formData.address}
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
                                            // value={formData.address}
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
                                            // value={formData.address}
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
                                            // value={formData.address}
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
                                            // value={formData.address}
                                            fullWidth
                                            type="text"
                                            name="field10"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            label="field12"
                                            variant="standard"
                                            // value={formData.address}
                                            fullWidth
                                            type="text"
                                            name="field12"
                                            autoComplete="off"
                                            className="my-2"
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
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
                                </Grid>
                            </Grid>
                            <div className="text-center my-2 mt-4">
                                <Button variant="contained" type="submit" className="m-2" onClick={() => setOpen(false)}>
                                    AddCategory
                                </Button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </>
    );
};

export default AddCategory3;