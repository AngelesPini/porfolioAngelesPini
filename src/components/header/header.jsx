import React from 'react';
import Textos from '../textos/textos';
import Me from '../../assets/foto-cv.png'
import TypeWriter from '../typeWriter/typeWriter';

import './header.css'
const Header = ({style}) => {
    return (
        <div className={style}>
            <div className="texto">
                <Textos value='HOLA, SOY' style='title'/>
                <Textos value='ÁNGELES' style='subtitleHeader'/>
                <TypeWriter style='typeWriter'/>
            </div>
            <div className="foto">
                <img src={Me} alt="" />
            </div>
        </div>
    );
}

export default Header;
