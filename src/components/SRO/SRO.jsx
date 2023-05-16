import React from 'react';
import { dataSRO } from '../../data/data';

import { MyButton } from '../../UI/MyButton/MyButton';
import { FormList } from '../FormList/FormList';

import { useFormik } from 'formik';

export const SRO = ({ onClick, ...props }) => {

    const formik = useFormik({
        initialValues: {
            forename: '',
            adres: '',
            INN: ''
        },

        onSubmit: values => {
            console.log(values)
        },
    })

    const addObj = () => {
        onClick({
            forename: formik.values.forename,
            adres: formik.values.adres,
            INN: formik.values.INN
        })
    }

    return (
        <form className='box' onSubmit={formik.handleSubmit}>
            <FormList data={dataSRO} onChange={formik.handleChange} />
            <MyButton onClick={addObj} type="submit">Добавить Данные</MyButton>
        </form>
    )
}
