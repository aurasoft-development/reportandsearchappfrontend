import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddCategory1 from '../form/AddCategory1';
import '../../assets/css/CategoryModel.css'
import { FindState } from '../../context/FindContext';
import AddCategory2 from '../form/AddCategory2';
import AddCategory3 from '../form/AddCategory3';
import AddCategory4 from '../form/AddCategory4';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // height: "80%",
    // overflowY: "scroll"
};

export default function CategoryModel({ data }) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const { open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4 } = FindState()

    return (
        <div className='category-model-container'>
            {
                data == 1 ? <Button variant="contained" color="success" onClick={handleOpen}>Add Report</Button> : ""
            }
            {
                data == 2 ? <Button variant="contained" color="success" onClick={handleOpen2}>Add Report</Button> : ""
            }
            {
                data == 3 ? <Button variant="contained" color="success" onClick={handleOpen3}>Add Report</Button> : ""
            }
            {
                data == 4 ? <Button variant="contained" color="success" onClick={handleOpen4}>Add Report</Button> : ""
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddCategory1 />
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddCategory2 />
                </Box>
            </Modal>
            <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddCategory3 />
                </Box>
            </Modal>
            <Modal
                open={open4}
                onClose={handleClose4}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddCategory4 />
                </Box>
            </Modal>
        </div>
    );
}