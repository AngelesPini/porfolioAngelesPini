import React from 'react';

import './textos.css'

const Textos = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Textos;
