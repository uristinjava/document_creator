import React, { useState } from 'react';
import style from './Contract.module.css'
import { FormList } from '../FormList/FormList';
import { contract } from '../../data/data';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Contract = () => {

    // const addItem = () => {

    // }

    return (
        <div>
            <FormList data={contract} />

        </div>
    )
}
