import React, { useState } from 'react';
import { MyInput } from '../../UI/MyInput/MyInput';

import style from './InputList.module.css'


export const InputList = ({ data, ...props }) => {

    const arrData = Object.entries(data).splice(2)

    return (

        <ul className={style.list} >
            {
                arrData.map(el => (
                    <MyInput
                        key={el[0]}
                        label={el[1]}
                        name={el[0]}
                        {...props}

                    />
                ))
            }
        </ul>

        // <ul>
        //     {
        //         arrData.map(el => (
        //             <MyInput
        //                 key={el}
        //                 label={el}
        //                 name={el}
        //                 {...props}
        //             // {...field}

        //             />
        //         ))

        //     }

        // </ul>

    )
}
