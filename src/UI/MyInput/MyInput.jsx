import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Field, Formik, useField } from 'formik';



export const MyInput = ({ label, ...props }) => {



    return (

        < >

            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25inc' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    {...props}

                />
            </Box>

        </>

    )
}
