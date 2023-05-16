import React from 'react';
import { InputList } from '../InputList/InputList';
import style from './FormList.module.css'
import { MyButton } from '../../UI/MyButton/MyButton';

export const FormList = ({ data, ...props }) => {
    return (

        <div className={style.box} >
            <h5> {data.title} </h5>
            <InputList data={data} {...props} />
        </div>

    )
}
