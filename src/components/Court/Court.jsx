import React from 'react';
import { court } from '../../data/data';
import { FormList } from '../FormList/FormList';
import { MyButton } from '../../UI/MyButton/MyButton';

import { useFormik } from 'formik';

export const Court = ({ onClick, ...props }) => {



    const formik = useFormik({
        initialValues: {
            forename: '',
            adres: ''
        },

        onSubmit: values => {

            console.log(values)
        },
    })

    const addObj = () => {
        onClick({
            forename: formik.values.forename,
            adres: formik.values.adres
        })

    }



    return (
        <>
            <form className='box' onSubmit={formik.handleSubmit}>
                <FormList
                    data={court}
                    onChange={formik.handleChange}
                />
                <MyButton type="submit"
                    onClick={addObj}
                >
                    Добавить Данные
                </MyButton>
            </form>

        </>





        // <form className='box'>

        //     <FormList data={court} />
        //     <MyButton onClick={addDataForm}>Добавить Данные</MyButton>
        // </form>

    )
}
