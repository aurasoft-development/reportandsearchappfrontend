import React from 'react'
import { CircularProgress, TableCell, TableRow } from '@mui/material'

const Loader = ({ size }) => <TableRow >
    <TableCell colSpan={12} align='center'>
        <CircularProgress size={size || 35} />
    </TableCell>
</TableRow>

export default Loader;
