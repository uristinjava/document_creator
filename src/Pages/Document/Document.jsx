import React from 'react';
import { Court } from '../../components/Court/Court';
import { useState } from 'react';
import { Creditor } from '../../components/Creditor/Creditor';
import { ListItem } from '../../components/ListItem/ListItem';
import { Debtor } from '../../components/Debtor/Debtor';
import { SRO } from '../../components/SRO/SRO';

import style from './Document.module.css'
import { Modal } from '../../components/Modal/Modal';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MyButton } from '../../UI/MyButton/MyButton';
// import style from '../../components/ListItem/ListItem.module.css'



export const Document = () => {

    const [dataCourt, setDataCourt] = useState({
        forename: '',
        adres: ''
    })

    const handleGetDataCourt = (dataCourt) => {
        setDataCourt(dataCourt)
        console.log(dataCourt)
        setModalCourtActive(false)

    }
    const [dataCreditor, setDataCreditor] = useState(


        {
            id: Date.now(),
            forename: '',
            adres: '',
            titleContract: '',
            contractSum: '',
        },


    )


    const [arrDataTitleCreditor, setArrDataTitleCreditor] = useState([

    ]);
    const [arrDataCreditor, setArrDataCreditor] = useState([

    ]);

    // const [arrDataCreditor, setArrDataCreditor] = useState([

    // ]);




    // const handleGetDataCreditor = (dataCreditor) => {
    //     setDataCreditor(dataCreditor)
    //     console.log(dataCreditor)
    //     const newArrDataCreditor = [...arrDataCreditor, dataCreditor]
    //     setArrDataCreditor(newArrDataCreditor)
    //     console.log(newArrDataCreditor)

    // }

    const handleGetDataCreditor = dataCreditor => {

        setArrDataTitleCreditor(prev => {
            const isCreditorExists = prev.some(
                item => item?.forename === dataCreditor?.forename
            )


            if (!isCreditorExists) {
                return [...prev, dataCreditor]
            }

            return prev
        })

        setDataCreditor(dataCreditor)
        console.log(dataCreditor)
        const newArrDataCreditor = [...arrDataCreditor, dataCreditor]
        setArrDataCreditor(newArrDataCreditor)
        console.log(newArrDataCreditor)
    }




    console.log(arrDataCreditor)
    console.log(arrDataTitleCreditor)

    const renderCreditor = () => {


        setModalCreditorActive(false)
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
        setDataDebtor(dataDebtor)
        console.log(dataDebtor)
        setModalDebtorActive(false)

    }

    const [dataSRO, setDataSRO] = useState({
        forename: '',
        adres: '',
        INN: ''
    })

    const handleGetDataSRO = (dataSRO) => {
        setDataSRO(dataSRO)
        console.log(dataSRO)
        setModalSROActive(false)
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

    //добавление/удаление кредитора в модалке
    const item = <Creditor onClick={handleGetDataCreditor} />


    const [list, setList] = useState(
        [
            {
                id: 1, item
            },

        ]
    )


    const addItem = () => {
        const newItem = {
            id: Date.now(),
            item
        }
        setList(
            [...list, newItem]
        )

    }

    const delItem = (id) => {
        setList(
            (prevState) => prevState.filter(item => item.id !== id)
        )
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

                    <div className={style.box_addBtn} >

                        <ul className={style.box_ul} >
                            {list.length === 0
                                ?
                                <div onClick={addItem} className={style.box_add}>
                                    <AddCircleOutlineIcon />
                                    Добавить Кредитора
                                </div>
                                :
                                list.map((el, index) => (

                                    <li key={el.id} >
                                        {index + 1}.{el.item}
                                        <div className={style.box} >
                                            <div onClick={addItem} className={style.box_add}>
                                                <AddCircleOutlineIcon />
                                                Добавить
                                            </div>
                                            <div onClick={() => { delItem(el.id) }} className={style.box_add}>
                                                <AddCircleOutlineIcon />
                                                Удалить
                                            </div>
                                        </div>
                                    </li>

                                ))
                            }
                            <MyButton onClick={renderCreditor} >
                                Добавить данные в заявлeние и закрыть окно
                            </MyButton>
                        </ul>
                    </div>

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
                    <ul>
                        {arrDataTitleCreditor.map((el, index) => (

                            <li key={el.id} > {index + 1} {el.forename}
                                <br />
                                {el.adres}
                            </li>


                        ))}
                    </ul>
                </h3>
            </div>

        </div>
    )
}
