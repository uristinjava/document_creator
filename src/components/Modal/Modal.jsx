import style from './Modal.module.css'

import React from 'react'

export const Modal = ({ active, setActive, children }) => {

    return (
        <div onClick={() => setActive(false)} className={active ? `${style.active}` : `${style.modal}`}>

            <div className={active ? `${style.content_modal_active}` : `${style.content_modal}`} onClick={(e) => e.stopPropagation()} >
                {children}
            </div>

        </div>
    )
}
