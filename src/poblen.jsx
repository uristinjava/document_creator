import React from 'react'

const poblen = () => {

    const arrCreditor = [
        {
            id: Date.now(),
            title: 'Данные Кредитора',
            forename: 'Наименование Кредитора',
            adres: 'Адрес Кредитора',
            titleContract: 'Основание задолженности',
            contractSum: 'Сумма задолженности',
        },
        {
            id: Date.now(),
            title: 'Данные Кредитора',
            forename: 'Наименование Кредитора',
            adres: 'Адрес Кредитора',
            titleContract: 'Основание задолженности',
            contractSum: 'Сумма задолженности',
        },
        {
            id: Date.now(),
            title: 'Данные Кредитора',
            forename: 'Наименование Кредитора',
            adres: 'Адрес Кредитора',
            titleContract: 'Основание задолженности',
            contractSum: 'Сумма задолженности',
        }
    ]
    const newArrCreditorTitle = arrCreditor.filter(el => el.forename !== el.forename)




    return (
        <div>poblen</div>
    )
}

export default poblen