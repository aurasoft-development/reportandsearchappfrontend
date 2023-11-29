import React from 'react'
import { CircularProgress, TableCell, TableRow } from '@mui/material'


// Loader component that displays a circular progress indicator
// Props:
// - size: Size of the circular progress indicator (default is 35)
const Loader = ({size }) => <TableRow >
    <TableCell colSpan={12} align='center'>
        <CircularProgress size={ size || 35} />
    </TableCell>
</TableRow>

// Exporting the Loader component
export default Loader;
