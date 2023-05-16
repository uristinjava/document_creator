import React from 'react';
import { debtorData } from '../../data/data';
import { FormList } from '../FormList/FormList';
import { MyButton } from '../../UI/MyButton/MyButton';
import { useFormik } from 'formik';

import style from './Debtor.module.css'


export const Debtor = ({ onClick }) => {
    const formik = useFormik({
        initialValues: {
            nameDebtor: '',
            surNameDebtor: '',
            fatherNameDebtor: "",
            firstSurNameDebtor: "",
            birthdayDebtor: "",
            innDebtor: "",
            snilsDebtor: "",
            placeBirthday: "",
            documentDebtor: "",
            seriaDocument: "",
            numberDocument: "",
            dataDocument: "",
            authorityDocument: "",
            stateDybtor: "",
            regionDebtor: "",
            cityDebtor: "",
            townDebtor: "",
            streetDebtor: "",
            houseDebtor: "",
            corpHouseDebtor: "",
            flatDebtor: "",
            salaryDebtor: "",
            workDebtor: "",
            childDebtor: "",
            accountDebtor: "",
        },

        onSubmit: values => {
            console.log(values)
        },
    })

    const addObj = () => {
        onClick({
            nameDebtor: formik.values.nameDebtor,
            surNameDebtor: formik.values.surNameDebtor,
            fatherNameDebtor: formik.values.fatherNameDebtor,
            firstSurNameDebtor: formik.values.firstSurNameDebtor,
            birthdayDebtor: formik.values.birthdayDebtor,
            innDebtor: formik.values.innDebtor,
            snilsDebtor: formik.values.snilsDebtor,
            placeBirthday: formik.values.placeBirthday,
            documentDebtor: formik.values.documentDebtor,
            seriaDocument: formik.values.seriaDocument,
            numberDocument: formik.values.numberDocument,
            dataDocument: formik.values.dataDocument,
            authorityDocument: formik.values.authorityDocument,
            stateDybtor: formik.values.stateDybtor,
            regionDebtor: formik.values.regionDebtor,
            cityDebtor: formik.values.cityDebtor,
            townDebtor: formik.values.townDebtor,
            streetDebtor: formik.values.streetDebtor,
            houseDebtor: formik.values.houseDebtor,
            corpHouseDebtor: formik.values.corpHouseDebtor,
            flatDebtor: formik.values.flatDebtor,
            salaryDebtor: formik.values.salaryDebtor,
            workDebtor: formik.values.workDebtor,
            childDebtor: formik.values.childDebtor,
            accountDebtor: formik.values.accountDebtor,
        }
        )

    }
    return (
        <form className={style.box} onSubmit={formik.handleSubmit} >
            <FormList
                data={debtorData}
                onChange={formik.handleChange}
            />
            <MyButton
                type="submit"
                onClick={addObj}
            >Добавить данные</MyButton>
        </form>
    )
}
