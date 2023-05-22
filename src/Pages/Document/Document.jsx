import React from 'react';
import { Court } from '../../components/Court/Court';
import { useState, useRef } from 'react';
import { Creditor } from '../../components/Creditor/Creditor';
import { ListItem } from '../../components/ListItem/ListItem';
import { Debtor } from '../../components/Debtor/Debtor';
import { SRO } from '../../components/SRO/SRO';

import style from './Document.module.css'
import { Modal } from '../../components/Modal/Modal';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MyButton } from '../../UI/MyButton/MyButton';

import { useReactToPrint } from 'react-to-print';
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

    const [arrTotalSumCreditor, setArrTotalCreditor] = useState([

    ]);

    const handleGetDataCreditor = dataCreditor => {

        setArrDataTitleCreditor(prev => {
            const isCreditorExists = prev.some(
                item => item?.forename === dataCreditor?.forename && item?.adres === dataCreditor?.adres
            )


            if (!isCreditorExists) {
                return [...prev, dataCreditor]
            }

            return prev
        })

        setDataCreditor(dataCreditor)

        const newArrDataCreditor = [...arrDataCreditor, dataCreditor]
        setArrDataCreditor(newArrDataCreditor)


        const newArrTotal = [...arrTotalSumCreditor, + dataCreditor.contractSum]
        setArrTotalCreditor(newArrTotal)
        console.log(newArrTotal)

    }

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

    const sumCreditor = arrTotalSumCreditor.reduce((a, c) => a + c, 0);

    const componentRef = useRef();
    const handlerPrint = useReactToPrint(
        {
            content: () => componentRef.current,
            // onAfterPrint: () => alert('Документ отправлен на печать')
        }
    )

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

                <MyButton
                    style={{ background: '#6cd8ef' }}
                    onClick={handlerPrint}
                >Распечатать/Сохранить Заявление</MyButton>
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

            <div className={style.predoc} ref={componentRef} >
                <div className={style.title} >
                    <h4>В Арбитражный Суд {dataCourt.forename} </h4>
                    <h4>Адрес: {dataCourt.adres} </h4>
                    <br />
                    <h4>Заявитель(должник):</h4>
                    <h4>{dataDebtor.surNameDebtor} {dataDebtor.nameDebtor} {dataDebtor.fatherNameDebtor} </h4>
                    <h4> ИНН: {dataDebtor.innDebtor} </h4>
                    <h4> {dataDebtor.documentDebtor}: {dataDebtor.salaryDebtor} {dataDebtor.numberDocument} </h4>
                    <h4>дата выдачи:{dataDebtor.dataDocument} </h4>
                    <h4> дата рождения: {dataDebtor.birthdayDebtor} </h4>
                    <h4> место рождения: {dataDebtor.placeBirthday} </h4>
                    <h4>адрес регистрации: {dataDebtor.stateDybtor}, {dataDebtor.regionDebtor} {dataCreditor.cityDebtor} {dataCreditor.townDebtor}, {dataDebtor.streetDebtor}, {dataDebtor.houseDebtor} {dataDebtor.corpHouseDebtor} {dataDebtor.flatDebtor} </h4>
                    <br />
                    <h4>Кредитор:
                        <ul>
                            {arrDataTitleCreditor.map((el, index) => (
                                <li key={el.id} >
                                    {index + 1}.
                                    {el.forename}
                                    <br />
                                    {el.adres}
                                </li>
                            ))}
                        </ul>
                    </h4>
                    <br />
                    <h4>Лица участвующие в деле:</h4>
                    <h4>{dataSRO.forename} <br /> (ИНН: {dataSRO.INN}) </h4>
                    <h4> адрес: {dataSRO.adres}</h4>

                    <h4>государственная пошлина: 300 р.</h4>
                    <h4>общая сумма задолженности: {sumCreditor} рублей </h4>
                </div>
                <h4 style={{ margin: '1rem 0rem', textAlign: 'center' }} >Заявление о признании должника несостоятельным (банкротом).</h4>
                <div className={style.body_isk} >
                    <p>
                        В соответствии с п. 1 ст. 213.4 Федерального закона от 26.10.2002 N 127-ФЗ "О несостоятельности  (банкротстве) " (далее по тексту – ФЗ «О  несостоятельности (банкротстве)») - Гражданин обязан   обратиться в   арбитражный суд с заявлением   о   признании   его   банкротом  в случае,  если  удовлетворение     требований    одного кредитора или нескольких   кредиторов  приводит  к  невозможности  исполнения  гражданином  денежных  обязательств и (или) обязанности по уплате  обязательных  платежей  в  полном  объеме  перед  другими  кредиторами  и  размер таких обязательств и обязанности в совокупности составляет не менее чем пятьсот тысяч рублей.
                    </p>
                    <p>
                        Согласно пункта 10 Постановления Пленума Верховного Суда РФ от 13.10.2015 № 45 « О некоторых  вопросах, связанных с  введением в  действие процедур,  применяемых в делах о    несостоятельности (банкротстве)  граждан».
                    </p>
                    <p>
                        Обязанность    должника   по   обращению  в  арбитражный    суд  с       заявлением  о  признании  себя  банкротом на основании  пункта  1  статьи  213.4  ФЗ  «О несостоятельности  (банкротстве) »     возникает  при  одновременном наличии двух условий:
                    </p>

                    <ul>
                        <li>
                            - размер неисполненных должником денежных обязательств и (или) обязанности по уплате    обязательных платежей  (как с наступившим сроком исполнения, так и с не наступившим)  в  совокупности  составляет не менее чем пятьсот тысяч рублей независимо от того, связаны они с осуществлением предпринимательской деятельности или нет;
                        </li>
                        <li>
                            - удовлетворение  требования  одного или нескольких кредиторов приведет к невозможности исполнения обязательств и (или) обязанностей по уплате обязательных платежей перед другими кредиторами.
                        </li>
                    </ul>

                    <h4>1. Кредиторская Задолженность ДОЛЖНИКА </h4>
                    <p>
                        На момент подачи заявления, {dataDebtor.surNameDebtor} {dataDebtor.nameDebtor}  {dataDebtor.fatherNameDebtor} (далее по тексту - "Должник") имеет задолженность перед следующими Кредиторами:
                        <br />
                        <br />
                    </p>

                    <hr />

                    <ul>
                        {arrDataCreditor.map((el, index) => (
                            <li key={el.id} > {index + 1}. {el.forename} основание задолженности: {el.titleContract} в размере {el.contractSum} рублей; </li>

                        ))}
                    </ul>
                    <hr />
                    Общая сумма задолженности срок исполнения которой наступил уже более трех календарных месяцев назад составляет {sumCreditor} рублей.
                    <hr />

                    <br />


                    <p>
                        Данный факт послужил оснванием для обращения с настоящим заявлением в Арбитражный суд
                    </p>

                    <p style={{ fontWeight: 'bold' }} >Задолженность подтверждается кредитной историей, справкой о задолженности и иными документами.</p>
                    <h4>2. Имущественное положение ДОЛЖНИКА </h4>
                    <p>
                        У Должника отсутствует движимое и недвижимое имущество, как на территории РФ, так и   за ее   пределами, на которое в соответствии с гражданским процессуальным законодательством может быть обращено взыскание.
                    </p>

                    {
                        +(dataDebtor.childDebtor) > 1
                            ?
                            <p>Должник на иждивении имеет {dataDebtor.childDebtor} несовершеннолетнего(них) ребенка (детей).</p>
                            :
                            <p>Должник не имеет иждивенцев. </p>
                    }


                    <p>
                        Остаток денежных средств на счете в банке открытый на имя Должника составляет {dataDebtor.accountDebtor} рублей, что достаточно для расходов в рамках процедуры несостоятельности.
                    </p>
                    <p>
                        Должник не осуществляет предпринимательскую деятельность,  доход составляет {dataDebtor.salaryDebtor} рублей, что подтверждается документами приложенными к настоящему заявлению.
                    </p>
                    <p>
                        С учетом положений пункта 2 ст.213.14 ФЗ «О несостоятельности (банкротстве)» срок реализации плана
                        реструктуризации имущества не должен превышать трех лет, исходя из чего, минимальный ежемесячный платеж
                        Должника составит: {sumCreditor} : (12 месяцев*3) = {(sumCreditor / 36).toFixed(2)} рублей в месяц.
                    </p>
                    <p>
                        В силу несопоставимости ежемесячного объема доходов Должника и размера неисполненных обязательств,
                        срок исполнения которых наступил на дату подачи заявления о признании Должника несостоятельным
                        (банкротом), Должник не отвечает требованиям п.1 ст.213.13 «О несостоятельности (банкротстве)», по причине отсутствия дохода, обеспечивающего одновременно достаточность денежных средств для погашения имеющейся кредиторской задолженности на условиях ее отсрочки (рассрочки) и, одновременно с этим, достойный уровень существования Должника.
                    </p>
                    <p>
                        Таким образом, имущественное положение Должника не позволяет произвести погашение требований Кредиторов, а удовлетворение требований одного кредитора или нескольких кредиторов приводит к невозможности исполнения Должником денежных обязательств и (или) обязанности по уплате обязательных платежей в полном объеме перед другими кредиторами.
                    </p>
                    <p>
                        В соответствии с пунктом 4 статьи 213.4 ФЗ «О несостоятельности (банкротстве)» - В заявлении о признании
                        гражданина банкротом указываются наименование и адрес саморегулируемой организации, из числа членов
                        которой должен быть утвержден финансовый управляющий.
                    </p>
                    <p>
                        В соответствии с пунктом 4 статьи 213.4 ФЗ «О несостоятельности (банкротстве)» - Денежные средства
                        на выплату вознаграждения финансовому управляющему в размере, равном фиксированной сумме
                        вознаграждения финансового управляющего за одну процедуру, применяемую в деле о банкротстве
                        гражданина, вносятся в депозит арбитражного суда.
                    </p>
                    <p>
                        Денежные средства на выплату вознаграждения финансовому управляющему в соответствии с пунктом 3 ст. 20.6
                        ФЗ «О несостоятельности (банкротстве)» в размере 25 000 рублей внесены на депозит Арбитражного суда, что
                        подтверждается платежным документом, оригинал которого приложен к настоящему заявлению.
                        Дополнительно сообщаю, что исключительными правами на результаты интеллектуальной собственности
                    </p>
                    <p>
                        У Должника отсутствуют сделоки с недвижимым имуществом, транспортными средствами, ценными бумагами,
                        долями в уставном капитале и сделки на сумму свыше трехсот тысяч рублей в течение трех лет до даты подачи
                        заявления не совершал.
                    </p>
                    <p>
                        Должником не заключались брачные договоры, соглашения о разделе общего имущества супругов, принятые в
                        течение трех лет до дня подачи данного заявления.
                    </p>
                    <p>
                        На основании положений статей 20.7, 213.9, 213.4 ФЗ «О несостоятельности (банкротстве)», Должник, обязуется Должник, обязуется обеспечить в полном объеме расходы на осуществление проведения процедур, применяемых в деле о банкротстве, за счет личных денежных средств, размещенных на счету в банке, о чем приложена справка о наличии достаточной денежной суммы размещенной на счете Кредитной организации.
                    </p>
                    <p>
                        В соответствии с пунктом 12 Постановления Пленума Верховного Суда РФ от 13.10.2015 № 45 «О некоторых
                        вопросах, связанных с введением в действие процедур, применяемых в делах о несостоятельности (банкротстве) граждан» - к заявлению должника о признании его банкротом должны быть приложены документы,
                        перечисленные в п. 3 ст. 213.4 Закона о банкротстве. Если при рассмотрении вопроса о принятии заявления
                        должника о признании его банкротом установлено несоблюдение им требований, предусмотренных п. 3 ст.213.4
                        Закона о банкротстве, суд, в силу пункта 1 статьи 44 Закона, оставляет заявление без движения а при неустранении допущенных нарушений - возвращает его, за исключением случаев подачи должником заявления на основании п.1 статьи 213.4 Закона о банкротстве.
                    </p>
                    <p>
                        В этом случае суд принимает заявление к производству, а недостающие документы истребует при подготовке
                        дела к судебному разбирательству (абзац второй пункта 1 статьи 42 Закона о банкротстве).
                    </p>
                    <p>
                        На основании изложенного и руководствуясь положениями Федерального закона от 26.10.2002 N 127-ФЗ
                        «О несостоятельности (банкротстве)», АПК РФ, ст. 333.21 НК РФ,
                    </p>

                    <h3 style={{ textAlign: 'center', margin: '1rem 0' }} >ПРОШУ СУД:</h3>
                    <ul>
                        <li>
                            -Признать гражданина(ку) Российской Федерации {dataDebtor.surNameDebtor} {dataDebtor.nameDebtor}  {dataDebtor.fatherNameDebtor} несостоятельным (банкротом) и ввести процедуру реализации имущества Должника
                        </li>
                        <li>
                            -Назначить финансового управляющего из числа членов СРО Урбитражных управляющих: "{dataSRO.forename}", адрес для корреспондениции:  {dataSRO.adres}

                        </li>
                        <li>
                            -Установить фиксированное вознаграждение финансовому управляющему в размере 25 000 рублей.
                        </li>
                    </ul>
                    <p style={{ fontStyle: 'italic', textAlign: 'center', margin: '1rem 0rem' }} >
                        В случае установления судом несоблюдения мной требований, предусмотренных пунктом 3 статьи 213.4,
                        истребовать недостающие документы при подготовке дела к судебному разбирательству.
                    </p>

                    <div className={style.end_isk}>

                        <p>Приложения:</p>
                        <ol>
                            <li>-Документы, подтверждающие направление заявления и документов кредитору;</li>
                            <li>-Квитанция об уплате государственной пошлины;</li>
                            <li>-Квитанция о перечислении денежных средств на депозит Арбитражного суда, на выплату вознаграждения финансовому управляющему;</li>
                            <li>-Документы, подтверждающие направление заявления и документов кредитору;</li>
                            <li>-Квитанция о направлении указанного заявления в налоговый орган по месту регистрации Должника;</li>
                            <li>-Выписки из ЕГРЮЛ в отношении кредиторов согласно перечню Заявления;</li>
                            <li>-Сведения из ЕГРИП;</li>
                            <li>-Список кредиторов и должников Должника;</li>
                            <li>-Опись имущества гражданина с указанием места нахождения или хранения имущества;</li>
                            <li>-Паспорт;</li>
                            <li>-Свидетельство о постановке на учет в налоговом органе;</li>
                            <li>-Страховое свидетельство государственного пенсионного страхования;</li>
                            <li>-Сведения о состоянии индивидуального лицевого счета;</li>
                            <li>-Справки о подтверждающие доход;</li>
                            <li>-Информация по наличию денежных средств на счетах;</li>
                            <li>-Сведения из ЕГРН</li>
                            <li>-Кредитная история;</li>
                            <li>-Сведения о задолженности по исполнительным производствам</li>
                            <li>-Справка о наличии денежных средств на расходы по процедуре банкротства</li>
                            {+ (dataDebtor.childDebtor) > 1
                                ?
                                <li>-Свидетельства о рождении детей</li>
                                :
                                <li></li>
                            }

                        </ol>
                        <p style={{ fontStyle: 'italic', textAlign: 'center' }} >
                            Копии документов, приложенные к данному заявлению, имеются у Заявителя в подлинниках, которые будут
                            предоставлены суду в назначенное время судебного заседания для заверения.
                        </p>
                        <br />
                        <p style={{ textAlign: 'end', marginBottom: '1rem', }} >
                            ________________________/{dataDebtor.surNameDebtor} {dataDebtor.nameDebtor}  {dataDebtor.fatherNameDebtor}
                        </p>
                    </div>
                </div>

                <div className={style.main_application}>
                    <div className={style.title_N2} >
                        <p>Приложение №1</p>
                        <p>к приказу Минэкономразвития России</p>
                        <p>от 05.08.2015 № 530</p>
                        <p>ФОРМА</p>
                    </div>
                    <h3 className={style.header_application} >Список кредиторов и должников гражданина</h3>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <h5>Информация о гражданине</h5>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>фамилия</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.surNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>имя</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.nameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>отчество</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.fatherNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>в случае изменения фамилии,
                                имени, отчества указать прежние
                                фамилии, имена, отчества</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.firstSurNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>дата рождения</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.birthdayDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>место рождения</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.placeBirthday} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>СНИЛС</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.snilsDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>ИНН</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.innDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>Документ удостоверяюший личность</p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>вид документа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.documentDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>Серия (при наличии) и номер</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.seriaDocument} {dataDebtor.numberDocument} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>адрес регистрации по месту жительства в Российской Федерации*</p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>субъект Российской Федерации</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.stateDybtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>район</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.regionDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>город</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>{dataDebtor.cityDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>населенный пункт (село, поселок и так далее)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.townDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>улица (проспект, переулок и так далее)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.streetDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер дома (владение)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.houseDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер корпуса (строения)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.corpHouseDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер квартиры (офиса) при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.flatDebtor}  </p>
                        </div>
                    </div>
                    <p style={{ borderBottom: '1px solid black', fontSize: '.7rem', marginTop: '1rem' }} >
                        * При отсутствии регистрации по месту жительства в пределах Российской Федерации указать
                        наименование субъекта Российской Федерации по месту пребывания без указания конкретного
                        адреса:
                    </p>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5 style={{ textAlign: 'center', margin: '.5rem 0' }} >I. Сведения о кредиторах гражданина (по денежным обязательствам и (или) обязанности по уплате обязательных платежей, за исключением возникших в результате осуществления гражданином предпринимательской деятельности)</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Денежные обязательства</h5>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Содержание обязательства </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Кредитор </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание возникновения</p>
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className={style.box_application_content} style={{ border: 'none', marginBottom: '6px', width: '305px' }}>
                                <h5 className={style.text_aplication} >Сумма обязательства</h5>
                            </div>
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    <p >всего</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >в том<br />числе задолженность</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >Штрафы, пени и иные санкции</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        arrDataCreditor.map((el, index) => (
                            <div className={style.box_application} key={el.id}>
                                <div className={style.box_application_content} style={{ width: '36%' }}>
                                    <p className={style.text_aplication} style={{ width: '35%' }}  > {index + 1} </p>
                                </div>
                                <div className={style.box_application_content} >
                                    <p className={style.text_aplication} >{el.kindContract}</p>
                                </div>
                                <div className={style.box_application_content} >
                                    <p className={style.text_aplication} > {el.forename} </p>
                                </div>
                                <div className={style.box_application_content} >
                                    <p className={style.text_aplication} >{el.adres}</p>
                                </div>
                                <div className={style.box_application_content} style={{ minWidth: '90.40px' }} >
                                    <p className={style.text_aplication} >{el.titleContract}</p>
                                </div>
                                <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                    <div className={style.box_application_content} style={{ width: '92.32px', fontSize: '.7rem', borderRight: 'none' }} >
                                        <p >{el.contractSum}</p>
                                    </div>
                                    <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderRight: 'none' }} >
                                        <p >{el.contractSum}</p>
                                    </div>
                                    <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem' }} >
                                        <p >{el.contractSum}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Обязательные платежи</h5>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > № п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование налога, сбора или иного обязательного платежа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Недоимка</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Штрафы, пени и иные санкции</p>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} ></p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Недоимка</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Штрафы, пени и иные санкции</p> */}
                        </div>
                    </div>

                    <h6>Сведения о неденежных обязательствах гражданина, за исключением возникших в результате осуществления гражданином предпринимательской деятельности (в том числе о передаче имущества в собственность, выполнении работ и оказании услуг и так далее):</h6>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5 style={{ textAlign: 'center', margin: '.5rem 0' }} >II. Сведения о кредиторах гражданина
                            (по денежным обязательствам и (или) обязанности по уплате обязательных платежей,
                            которые возникли в результате осуществления гражданином
                            предпринимательской деятельности)</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Денежные обязательства</h5>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Содержание обязательства </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Кредитор </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание возникновения</p>
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className={style.box_application_content} style={{ border: 'none', marginBottom: '6px', width: '305px' }}>
                                <h5 className={style.text_aplication} >Сумма обязательства</h5>
                            </div>
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    <p >всего</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >в том<br />числе задолженность</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >Штрафы, пени и иные санкции</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Содержание обязательства </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Кредитор </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание возникновения</p> */}
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    {/* <p >всего</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >в том<br />числе задолженность</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >Штрафы, пени и иные санкции</p> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Обязательные платежи</h5>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > № п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование налога, сбора или иного обязательного платежа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Недоимка</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Штрафы, пени и иные санкции</p>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} ></p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Недоимка</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Штрафы, пени и иные санкции</p> */}
                        </div>
                    </div>

                    <h6>Сведения о неденежных обязательствах гражданина, которые возникли в результате осуществления гражданином предпринимательской деятельности (в том числе о передаче имущества в собственность, выполнении работ и оказании услуг и так далее): </h6>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5 style={{ textAlign: 'center', margin: '.5rem 0' }} >III. Сведения о должниках гражданина
                            (по денежным обязательствам и (или) обязанности по уплате обязательных платежей,
                            за исключением возникших в результате осуществления гражданином предприниматель-ской деятельности)</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Денежные обязательства</h5>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Содержание обязательства </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Кредитор </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание возникновения</p>
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className={style.box_application_content} style={{ border: 'none', marginBottom: '6px', width: '305px' }}>
                                <h5 className={style.text_aplication} >Сумма обязательства</h5>
                            </div>
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    <p >всего</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >в том<br />числе задолженность</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >Штрафы, пени и иные санкции</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Содержание обязательства </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Кредитор </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание возникновения</p> */}
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    {/* <p >всего</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >в том<br />числе задолженность</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >Штрафы, пени и иные санкции</p> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Обязательные платежи</h5>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > № п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование налога, сбора или иного обязательного платежа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Недоимка</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Штрафы, пени и иные санкции</p>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} ></p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Недоимка</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Штрафы, пени и иные санкции</p> */}
                        </div>
                    </div>

                    <h6>
                        Сведения о неденежных обязательствах гражданина, которые возникли в результате осуществления гражданином предпринимательской деятельности (в том числе о передаче имущества в собственность, выполнении работ и оказании услуг и так далее):
                    </h6>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5 style={{ textAlign: 'center', margin: '.5rem 0' }} >IV. Сведения о должниках гражданина
                            (по денежным обязательствам и (или) обязанности по уплате обязательных платежей,
                            которые возникли в результате осуществления гражданином
                            предпринимательской деятельности)</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Денежные обязательства</h5>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Содержание обязательства </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Кредитор </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание возникновения</p>
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className={style.box_application_content} style={{ border: 'none', marginBottom: '6px', width: '305px' }}>
                                <h5 className={style.text_aplication} >Сумма обязательства</h5>
                            </div>
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    <p >всего</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >в том<br />числе задолженность</p>
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    <p >Штрафы, пени и иные санкции</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '36%' }}>
                            <p className={style.text_aplication} style={{ width: '35%' }}  >1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Содержание обязательства </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Кредитор </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Место нахождения (место жительства) кредитора </p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание возникновения</p> */}
                        </div>
                        <div className={style.box_application_content} style={{ flexDirection: 'column', minWidth: '309px', padding: '0' }} >
                            <div className="" style={{ display: 'flex', minWidth: '309px', justifySelf: 'flex-end' }} >
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }} >
                                    {/* <p >всего</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '40%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >в том<br />числе задолженность</p> */}
                                </div>
                                <div className={style.box_application_content} style={{ width: '30%', fontSize: '.7rem', borderBottom: 'none', borderRight: 'none' }} >
                                    {/* <p >Штрафы, пени и иные санкции</p> */}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 2.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <h5 className={style.text_aplication} >Обязательные платежи</h5>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > № п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование налога, сбора или иного обязательного платежа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Недоимка</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Штрафы, пени и иные санкции</p>
                        </div>
                    </div>
                    <div className={style.box_application}>
                        <div className={style.box_application_content} style={{ width: '34.38px' }}>
                            <p className={style.text_aplication} style={{ width: '34px', margin: '0' }} > 1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} ></p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Недоимка</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Штрафы, пени и иные санкции</p> */}
                        </div>
                    </div>

                    <h6>
                        Сведения о неденежных обязательствах гражданина, которые возникли в результате осуществления гражданином предпринимательской деятельности (в том числе о передаче имущества в собственность, выполнении работ и оказании услуг и так далее):
                    </h6>
                    <br /><br /><br />

                    <h5 style={{ width: '100%', margin: '1rem 0', textAlign: 'start' }} >Достоверность и полноту настоящих сведений подтверждаю.</h5>
                    <p style={{ textAlign: 'end', marginBottom: '1rem' }} >
                        ________________________/{dataDebtor.surNameDebtor} {dataDebtor.nameDebtor}  {dataDebtor.fatherNameDebtor}
                    </p>
                </div>



                <div className={style.main_application}>
                    <div className={style.title_N2} >
                        <p>Приложение №2</p>
                        <p>к приказу Минэкономразвития России</p>
                        <p>от 05.08.2015 № 530</p>
                        <p>ФОРМА</p>
                    </div>
                    <h3 className={style.header_application} >Опись имущества гражданина</h3>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <h5>Информация о гражданине</h5>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>фамилия</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.surNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>имя</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.nameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>отчество</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.fatherNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>в случае изменения фамилии,
                                имени, отчества указать прежние
                                фамилии, имена, отчества</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.firstSurNameDebtor} </p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>дата рождения</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.birthdayDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>место рождения</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.placeBirthday} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>СНИЛС</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.snilsDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>ИНН</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.innDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>Документ удостоверяюший личность</p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>вид документа</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.documentDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>Серия (при наличии) и номер</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.seriaDocument} {dataDebtor.numberDocument} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>адрес регистрации по месту жительства в Российской Федерации*</p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>субъект Российской Федерации</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>обязательно</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.stateDybtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>район</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.regionDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>город</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>{dataDebtor.cityDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>населенный пункт (село, поселок и так далее)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.townDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>улица (проспект, переулок и так далее)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.streetDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер дома (владение)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.houseDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер корпуса (строения)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.corpHouseDebtor} </p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} >
                            <p>номер квартиры (офиса) при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p>при наличии</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p> {dataDebtor.flatDebtor}  </p>
                        </div>
                    </div>
                    <p style={{ borderBottom: '1px solid black', fontSize: '.7rem', marginTop: '1rem' }} >
                        * При отсутствии регистрации по месту жительства в пределах Российской Федерации указать
                        наименование субъекта Российской Федерации по месту пребывания без указания конкретного
                        адреса:
                    </p>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>I. Недвижимое имущество</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид и наименование
                                имущества</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид собственности</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Местонахождение (адрес)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Площадь (кв.м)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание приобретения и стоимость</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >1.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Земельные участки:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >1.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Жилые дома, дачи:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >1.3</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Квартиры:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >1.4</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Гаражи:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >1.5</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Иное недвижимое имущество</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>

                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>II. Движимое имущество</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид, марка, модель транспортного средства, год изготовления</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Идентификационный номер</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид собственности</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождения/место хранени</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Стоимость</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p>
                        </div>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Автомобили легковые:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Автомобили грузовые:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.3</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Мототранспортные:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.4</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Сельскохозяйственная техника</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.5</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Водный транспорт</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.6</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Воздушный транспорт</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >2.6</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Иные транспортные средства</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид собственности</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Местонахождение (адрес)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Площадь (кв.м)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Основание приобретения и стоимость</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p> */}
                        </div>

                    </div>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>III. Сведения о счетах в банках и иных кредитных организациях</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование и адрес банка или иной кредитной организации</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид и валюта счета</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Дата открытия счета</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Остаток на счете (руб.)</p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >3.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Наименование и адрес банка или иной кредитной организации</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>IV. Акции и иное участие в коммерческих организациях</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наименование и организационно-правовая форма организации</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Местонахождение организации (адрес)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Уставной складочный капитал</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Доля участия</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Основание участия</p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >4.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Наименование и адрес банка или иной кредитной организации</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>V. Иные ценные бумаги</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид ценной бумаги</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Лицо, выпустившее ценную бумагу</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Номинальная величина обязательства (руб.)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Общее количество</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Общая стоимость (руб.)</p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >5.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Наименование и адрес банка или иной кредитной организации</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                </div>
                <div className={style.application} >
                    <div className={style.box_application_content} >
                        <h5>VI. Сведения о наличии денежных средствах и ином имуществе</h5>
                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >№ п/п</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Вид и наименование имущества</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Стоимость (сумма и валюта)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Место нахождение/место хранения (адрес)</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Сведения о залоге и залогодержателе</p>
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >6.1</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Наличные денежные средства</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >6.2</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Драгоценности, в том числе ювелирные украшения, и другие предметы роскоши:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >6.3</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Предметы искусства:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >6.4</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Имущество, необходимое для профессиональных занятий:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>
                    <div className={style.box_application} >
                        <div className={style.box_application_content} style={{ width: '27%' }}>
                            <p className={style.text_aplication} style={{ width: '15%' }}  >6.5</p>
                        </div>
                        <div className={style.box_application_content} >
                            <p className={style.text_aplication} >Иное ценное имущество:</p>
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Вид и валюта счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Дата открытия счета</p> */}
                        </div>
                        <div className={style.box_application_content} >
                            {/* <p className={style.text_aplication} >Остаток на счете (руб.)</p> */}
                        </div>

                    </div>

                    <h5 style={{ width: '100%', margin: '1rem 0', textAlign: 'start' }} >Достоверность и полноту настоящих сведений подтверждаю.</h5>
                    <p style={{ textAlign: 'end', marginBottom: '1rem' }} >
                        ________________________/{dataDebtor.surNameDebtor} {dataDebtor.nameDebtor}  {dataDebtor.fatherNameDebtor}
                    </p>

                </div>


            </div>

        </div>
    )
}
