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
    // const captureSelfie = () => {
    //     if (webcamRef.current) {
    //         const imageSrc = webcamRef.current.getScreenshot();

    //         console.log('imgage we have capture', imageSrc);
    //     }
    //     setShowWebcam(false)
    // };

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





// import React, { useRef, useEffect, useState } from 'react';
// import { Button, Grid, Paper, TextField } from '@mui/material';
// import '../../assets/css/form/AddCategory1.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Webcam from 'react-webcam';
// import { useNavigate } from 'react-router-dom';
// import * as faceapi from 'face-api.js';
// import CloseIcon from '@mui/icons-material/Close';
// import { FindState } from '../../context/FindContext';

// const AddCategory1 = () => {
//   const webcamRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [isLiveObject, setIsLiveObject] = useState(false);
//   const { open, setOpen } = FindState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let videoStream;

//     const loadModels = async () => {
//       await Promise.all([
//         faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//         faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//       ]);
//     };

//     const startVideo = async () => {
//       const video = videoRef.current;

//       try {
//         videoStream = await navigator.mediaDevices.getUserMedia({ video: {} });
//         video.srcObject = videoStream;
//       } catch (error) {
//         console.error('Error accessing webcam:', error);
//       }

//       video.addEventListener('loadeddata', () => {
//         setInterval(detectFaceAndCapture, 1000);
//       });
//     };

//     const detectFaceAndCapture = async () => {
//         const video = videoRef.current;
//         const canvas = canvasRef.current;
      
//         let detections = [];
      
//         try {
//           detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//             .withFaceLandmarks()
//             .withFaceDescriptors();
      
//           if (detections.length > 0) {
//             console.log('Face detected!');
//             // Set canvas dimensions to match video dimensions
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
//             const imageURL = canvas.toDataURL('image/png');
//             setCapturedImage(imageURL);
//             setIsLiveObject(true);
//             video.srcObject.getTracks().forEach(track => track.stop());
//           } else {
//             setIsLiveObject(false);
//           }
//         } catch (error) {
//           console.error('Error detecting face:', error);
//         }
      
//         const resizedDetections = faceapi.resizeResults(detections, { width: video.videoWidth, height: video.videoHeight });
//         canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
//         faceapi.draw.drawDetections(canvas, resizedDetections);
//         faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//       };
      

//     loadModels();
//     startVideo();

//     return () => {
//       // Cleanup function to stop the video stream when the component unmounts
//       if (videoStream) {
//         videoStream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const [formData, setFormData] = useState({
//     uid: '',
//     name: '',
//     address: '',
//     number: '',
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: '',
//     field5: '',
//     field6: '',
//     field7: '',
//     field8: '',
//     field9: '',
//     field10: '',
//     field11: '',
//     field12: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem('category1', JSON.stringify(formData));
//     setOpen(false);
//     navigate('/otpverification');
//   };

//   return (
//     <>
//       <Grid className="p-3">
//         <Paper elevation={20} className="paperStyle">
//           <Grid align="center">
//             <h2 className="headerStyle">Add Category Report</h2>
//             <span className="addcategory_icon" onClick={() => setOpen(false)}>
//               <CloseIcon />
//             </span>
//           </Grid>
//           <div className="container">
//             <form className="row mb-3" onSubmit={onSubmit}>
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   {/* Your existing form fields */}
//                 </Grid>
//                 <Grid item xs={6}>
//                   <div>
//                     <h1>Face Detection</h1>
//                     <video ref={videoRef} width="640" height="480" autoPlay playsInline></video>
//                     <canvas ref={canvasRef} width="640" height="480"></canvas>
//                     {capturedImage && <img src={capturedImage} alt="Captured" />}
//                   </div>
//                 </Grid>
//               </Grid>
//               <div className="text-center my-2 mt-4">
//                 <Button variant="contained" type="submit" className="m-2">
//                   AddCategory
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </Paper>
//       </Grid>
//     </>
//   );
// };

// export default AddCategory1;













// import { Button, Grid, Paper, TextField } from '@mui/material';
// import React, { useState, useRef, useEffect } from 'react';
// import '../../assets/css/form/AddCategory1.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Webcam from 'react-webcam';
// import { useNavigate } from 'react-router-dom'
// import * as faceapi from 'face-api.js';
// import CloseIcon from '@mui/icons-material/Close';
// import { FindState } from '../../context/FindContext';

// const AddCategory1 = () => {
//     const webcamRef = useRef(null);
//     const [showWebcam, setShowWebcam] = useState(false);
//     const { open, setOpen } = FindState()
//     const navigate = useNavigate();
//     const videoRef = useRef(null);
//     const canvasRef = useRef(null);
//     const [capturedImage, setCapturedImage] = useState(null);
  
//     useEffect(() => {
//       const loadModels = async () => {
//         await Promise.all([
//           faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//           faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//           faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//         ]);
//       };
  
//       const startVideo = async () => {
//         const video = videoRef.current;
  
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
//           video.srcObject = stream;
//         } catch (error) {
//           console.error('Error accessing webcam:', error);
//         }
  
//         video.addEventListener('loadeddata', () => {
//           setInterval(detectFaceAndCapture, 1000);
//         });
//       };
  
//       const detectFaceAndCapture = async () => {
//         const video = videoRef.current;
//         const canvas = canvasRef.current;
//         const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
  
//         if (detections.length > 0) {
//           console.log('Face detected!');
//           try {
//             // Capture the current frame from the video
//             canvas.getContext('2d').drawImage(video, 0, 0, video.width, video.height);
  
//             // Convert the canvas content to a data URL
//             const imageURL = canvas.toDataURL('image/png');
//             setCapturedImage(imageURL);
//             console.log('Captured image:', imageURL);
  
//             // Stop the video stream
//             const stream = video.srcObject;
//             const tracks = stream.getTracks();
//             tracks.forEach(track => track.stop());
  
//             // Hide the video element
//             video.style.display = 'none';
//           } catch (error) {
//             console.error('Error capturing image:', error);
//           }
//         }
  
//         const resizedDetections = faceapi.resizeResults(detections, { width: video.width, height: video.height });
//         canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
//         faceapi.draw.drawDetections(canvas, resizedDetections);
//         faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//       };
  
//       loadModels();
//       startVideo();
//     }, []);


//     const [formData, setFormData] = useState({
//         uid: '',
//         name: '',
//         address: '',
//         number: '',
//         field1: '',
//         field2: '',
//         field3: '',
//         field4: '',
//         field5: '',
//         field6: '',
//         field7: '',
//         field8: '',
//         field9: '',
//         field10: '',
//         field11: '',
//         field12: ''
//     });
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//     const onSubmit = (event) => {
//         event.preventDefault();
//         localStorage.setItem("category1", JSON.stringify(formData));
//         setOpen(false)
//         navigate('/otpverification')
//     };
//     // const captureSelfie = () => {
//     //     if (webcamRef.current) {
//     //         const imageSrc = webcamRef.current.getScreenshot();
//     //         console.log('imgage we have capture', imageSrc);
//     //     }
//     //     setShowWebcam(false)
//     // };

//     const dataURItoBlob = (dataURI) => {
//         const byteString = atob(dataURI.split(',')[1]);
//         const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

//         const ab = new ArrayBuffer(byteString.length);
//         const ia = new Uint8Array(ab);
//         for (let i = 0; i < byteString.length; i++) {
//             ia[i] = byteString.charCodeAt(i);
//         }

//         return new Blob([ab], { type: mimeString });
//     };


//     const captureSelfie = async () => {
//         if (webcamRef.current) {
//             const imageSrc = webcamRef.current.getScreenshot();

//             // Load face-api.js models before using them
//             await loadFaceAPI();

//             // Detect faces in the image
//             const detections = await faceapi.detectAllFaces(imageSrc, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();

//             // Check if faces are present
//             if (detections.length > 0) {
//                 setIsLiveObject(true);
//                 // Continue with the photo capture or any other actions
//             } else {
//                 setIsLiveObject(false);
//                 // Show a warning or take appropriate action
//             }
//         }
//     };


//     function handleTakePhotoAnimationDone(dataUri) {
//         // Do stuff with the photo...
//         console.log('takePhoto');
//     }
//     function handleCameraError(error) {
//         console.log('handleCameraError', error);
//     }
//     function handleCameraStart(stream) {
//         console.log('handleCameraStart');
//     }
//     function handleCameraStop() {
//         console.log('handleCameraStop');
//     }
//     function handleTakePhoto(dataUri) {
//         console.log('takePhoto', dataUri);
//         setShowWebcam(false)
//         handleCameraStop()
//     }

//     return (
//         <>

//             <Grid className="p-3">
//                 <Paper elevation={20} className="paperStyle">
//                     <Grid align="center" >
//                         <h2 className="headerStyle">Add Category Report</h2>
//                         <span className='addcategory_icon' onClick={() => setOpen(false)}><CloseIcon /></span>
//                     </Grid>
//                     <div className="container">
//                         <form className="row mb-3" onSubmit={onSubmit}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={6}>
//                                     <Grid>
//                                         <TextField
//                                             label="UID "
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="uid"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="Number "
//                                             variant="standard"
//                                             value={formData.number}
//                                             fullWidth
//                                             name="number"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field1"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="field1"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field3"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="field3"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field5"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="field5"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field7"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="field7"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field9"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="text"
//                                             name="field9"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field11"
//                                             variant="standard"
//                                             // value={formData.uid}
//                                             fullWidth
//                                             type="file"
//                                             name="field11"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Grid>
//                                         <TextField
//                                             label="Name"
//                                             variant="standard"
//                                             // value={formData.name}
//                                             fullWidth
//                                             type="text"
//                                             name="name"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="Address"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="address"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                             required
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field2"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field2"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field4"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field4"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field6"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field6"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field8"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field8"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field10"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field10"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     <Grid>
//                                         <TextField
//                                             label="field12"
//                                             variant="standard"
//                                             // value={formData.address}
//                                             fullWidth
//                                             type="text"
//                                             name="field12"
//                                             autoComplete="off"
//                                             className="my-2"
//                                             onChange={handleInputChange}
//                                         />
//                                     </Grid>
//                                     {/* <Grid className="my-2"  >
//                                         <button className="my-2" onClick={() => setShowWebcam(true)}>Open Webcam</button>
//                                         {showWebcam && (
//                                             <div>
//                                                 <Webcam
//                                                     height={100}
//                                                     audio={false}
//                                                     ref={webcamRef}
//                                                 />
//                                                 <button onClick={captureSelfie}>Capture Selfie</button>
//                                             </div>
//                                         )}
//                                     </Grid> */}
//                                     {/* <Grid className="my-2">
//                                         <button className="my-2" onClick={() => setShowWebcam(true)}>
//                                             Open Webcam
//                                         </button>
//                                         {showWebcam && (
//                                             <div>
//                                                 <Webcam height={100} audio={false} ref={webcamRef} />
//                                                 <button onClick={captureSelfie}>Capture Selfie</button>
//                                                 {isLiveObject ? (
//                                                     <p>Live object detected! You can capture the photo.</p>
//                                                 ) : (
//                                                     <p>Invalid object detected! Please show a living object in the camera.</p>
//                                                 )}
//                                             </div>
//                                         )}
//                                     </Grid> */}
//                                     <div>
//                                         <h1>Face Detection</h1>
//                                         <video ref={videoRef} width="640" height="480" autoPlay playsInline></video>
//                                         <canvas ref={canvasRef} width="640" height="480"></canvas>
//                                         {capturedImage && <img src={capturedImage} alt="Captured" />}
//                                     </div>
//                                 </Grid>
//                             </Grid>
//                             <div className="text-center my-2 mt-4">
//                                 <Button variant="contained" type="submit" className="m-2" >
//                                     AddCategory
//                                 </Button>
//                             </div>
//                         </form>
//                     </div>
//                 </Paper>
//             </Grid>
//         </>
//     );
// };

// export default AddCategory1;