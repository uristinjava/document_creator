import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const MyButton = ({ children, ...props }) => {
    return (
        <Stack spacing={2} direction="row">

            <Button variant="contained" {...props} >{children} </Button>

        </Stack>
    )
}
