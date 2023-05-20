import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Field, Formik, useField } from 'formik';



export const MyInput = ({ label, ...props }) => {



    return (

        < >


            <TextField id="filled-size-small" label={label} variant="standard" size="small" {...props} />


        </>

    )
}
