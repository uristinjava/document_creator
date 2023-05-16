import React from 'react';
import { Court } from '../../components/Court/Court';
import { useState } from 'react';
import { Creditor } from '../../components/Creditor/Creditor';
import { ListItem } from '../../components/ListItem/ListItem';
import { Debtor } from '../../components/Debtor/Debtor';
import { SRO } from '../../components/SRO/SRO';

import style from './Document.module.css'
import { Modal } from '../../components/Modal/Modal';



export const Document = () => {

    const [dataCourt, setDataCourt] = useState({
        forename: '',
        adres: ''
    })

    const handleGetDataCourt = (dataCourt) => {
        setDataCourt(dataCourt)

    }
    const [dataCreditor, setDataCreditor] = useState({
        id: Date.now(),
        forename: '',
        adres: '',
        titleContract: '',
        contractSum: '',

    })

    const handleGetDataCreditor = (dataCreditor) => {
        setDataCreditor(dataCreditor)
    }





    const [dataDebtor, setDataDebtor] = useState({
        id: Date.now(),
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

    })

    const handleGetDataDebtor = (dataDebtor) => {
        setDataCreditor(dataDebtor)
        console.log(dataDebtor)
    }

    const [dataSRO, setDataSRO] = useState({
        forename: '',
        adres: '',
        INN: ''
    })

    const handleGetDataSRO = (dataSRO) => {
        setDataSRO(dataSRO)
        console.log(dataSRO)
    }

    const [modalCourtActive, setModalCourtActive] = useState(false)

    const openCourtData = () => {
        setModalCourtActive(true)
    }

    const [modalCReditorActive, setModalCreditorActive] = useState(false)

    const openCreditorData = () => {
        setModalCreditorActive(true)
    }

    const [modalDebtorActive, setModalDebtorActive] = useState(false)

    const openDebtorData = () => {
        setModalDebtorActive(true)
    }

    const [modalSROActive, setModalSROActive] = useState(false)

    const openSROData = () => {
        setModalSROActive(true)
    }

    return (
        <div className={style.wrapper} >
            <div className={style.btn_box}>
                <div className={style.btn} onClick={openCourtData} >
                    <p>Данные суда</p>
                </div>
                <div className={style.btn} onClick={openCreditorData}>
                    <p>Данные Кредитора</p>
                </div>
                <div className={style.btn} onClick={openDebtorData}>
                    <p>Данные Должника</p>
                </div>
                <div className={style.btn} onClick={openSROData} >
                    <p>Данные СРО</p>
                </div>
            </div>

            <div className={style.modalBox} >

                <Modal active={modalCourtActive} setActive={setModalCourtActive}>
                    <Court onClick={handleGetDataCourt} />
                </Modal>

                <Modal active={modalCReditorActive} setActive={setModalCreditorActive} >
                    <ListItem component={<Creditor onClick={handleGetDataCreditor} />} />
                </Modal>

                <Modal active={modalDebtorActive} setActive={setModalDebtorActive} >
                    <Debtor onClick={handleGetDataDebtor} />
                </Modal>

                <Modal active={modalSROActive} setActive={setModalSROActive} >
                    <SRO onClick={handleGetDataSRO} />
                </Modal>
            </div>

            <div className={style.predoc} >
                <h3>В Арбитражный Суд {dataCourt.forename} </h3>
                <h3>Адрес: {dataCourt.adres} </h3>
                <br />
                <h3>Кредитор:
                    {

                    }

                </h3>
            </div>

        </div>
    )
}
