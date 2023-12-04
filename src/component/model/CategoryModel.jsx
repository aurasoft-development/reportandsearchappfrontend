// Import necessary React modules and components from Material-UI
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

// Style for the Modal component
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',

    bgcolor: 'background.paper',
    maxHeight: '80%',
    maxWidth: '70%',
    overflowY: 'auto',
    scrollbarWidth: 'thin', // For Firefox
    '&::-webkit-scrollbar': {
        width: '6px',
        height: '6px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: "var(--headingColor)",
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
    },
};

// Component for handling and rendering the Category Model
export default function CategoryModel({ data }) {

    // Functions to handle modal opening and closing for each category
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

     // Accessing state variables from the context using the custom hook
    const { open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4 } = FindState()

    // JSX to render the Category Model component
    return (
        <div className='category-model-container'>
            {/* Button to add a report for category1 */}

            {data == 1 ? <Button variant="contained" className='mainButton' onClick={handleOpen}>Add Report</Button> : ""}

            {/* Button to add a report for category2 */}
            { data == 2 ? <Button variant="contained" className='mainButton' onClick={handleOpen2}>Add Report</Button> : "" }

            {/* Button to add a report for category3 */}
            { data == 3 ? <Button variant="contained" className='mainButton' onClick={handleOpen3}>Add Report</Button> : "" }

            {/* Button to add a report for category4 */}
            { data == 4 ? <Button variant="contained" className='mainButton' onClick={handleOpen4}>Add Report</Button> : "" }

            {/* Modal for adding a report in category1 */}
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

            {/* Modal for adding a report in category2 */}
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

            {/* Modal for adding a report in category3 */}
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

            {/* Modal for adding a report in category4 */}
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