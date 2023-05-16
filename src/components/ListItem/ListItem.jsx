import React, { useState } from 'react';
import style from './ListItem.module.css';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ListItem = ({ component }) => {

    const item = component;


    const [list, setList] = useState(
        [
            { id: 1, item },

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
        </ul>
    )
}
