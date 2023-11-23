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
    const { open, setOpen, setCat } = FindState()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        uid: '',
        name: '',
        address: '',
        number: '',
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
            if (!validUID(formData.uid)) {
                toast.error("enter a valid uid");
            }
            if (!validName(formData.name)) {
                toast.error("enter a valid name");
            }
            if (!validNumber(formData.number)) {
                toast.error('enter a valid number')
            }
            if (!validAddress(formData.address)) {
                toast.error("enter a valid address")
            }

            else {
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
                                <Grid item xs={12}>
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

                                <Grid item xs={12}>
                                    <TextField
                                        label="Number "
                                        variant="standard"
                                        type='text'
                                        value={formData.number}
                                        fullWidth
                                        name="number"
                                        autoComplete="off"
                                        className="my-2"
                                        onChange={handleInputChange}
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
                                        required
                                    />
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
