import React from 'react'

const poblen = () => {

    const arrCreditor = [

        { id: 1684577973136, forename: 'ПАО "Сбербанк"!', adres: '', titleContract: '', contractSum: '' },

        { id: 1684577979114, forename: 'ПАО "Сбербанк"!', adres: '', titleContract: '', contractSum: '' },

        { id: 1684577985206, forename: 'ВТБ', adres: '', titleContract: '', contractSum: '' },
    ]

    //newArrCreditorTitle должен содержать только объекты с уникальными значениями forename
    const newArrCreditorTitle = arrCreditor.filter(el => el.forename !== el.forename)




    return (
        <div>poblen</div>
    )
}

export default poblen