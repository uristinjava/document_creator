import React from 'react';
import { creditor } from '../../data/data'
import Checkbox from '@mui/material/Checkbox';
import { MyButton } from '../../UI/MyButton/MyButton';
import style from './Creditor.module.css';
import { FormList } from '../FormList/FormList';
import { ListItem } from '../ListItem/ListItem';
import { useFormik } from 'formik';
import { DisabledByDefault } from '@mui/icons-material';



export const Creditor = ({ onClick }) => {

    const formik = useFormik({
        initialValues: {
            forename: '',
            adres: '',
            titleContract: '',
            contractSum: '',
        },

        onSubmit: values => {

            // console.log(values)
        },
    })

    const addObj = () => {
        onClick({
            id: Date.now(),
            forename: formik.values.forename,
            adres: formik.values.adres,
            titleContract: formik.values.titleContract,
            kindContract: formik.values.kindContract,
            contractSum: formik.values.contractSum

        })

    }



    return (
        <>
            <form className={style.box} onSubmit={formik.handleSubmit}>
                <FormList
                    data={creditor}
                    onChange={formik.handleChange}
                />
                <label className={style.box}>

                    <Checkbox />
                    <p className={style.text} >задолженность связанная с предпринимательской деятельностью</p>
                </label>
                <MyButton
                    type="submit"
                    onClick={addObj}
                >Добавить данные</MyButton>
            </form>
        </>


        // <form className={style.box}>
        //     <ListItem component={<FormList data={creditor} />} />
        //     <Checkbox />
        //     <p className={style.text} >задолженность связанная с предпринимательской деятельностью</p>
        //     <MyButton>Добавить данные</MyButton>
        // </form>

    )
}
