import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <Link to="/">Заполнить форму</Link>
            <Link to="/pdfdoc">Предварительный просмотр</Link>
        </>

    )
}