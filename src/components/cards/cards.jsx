import React from 'react';
import Textos from '../textos/textos';

import './cards.css'
const Cards = ({style,valueDev,styleTextDev, valueProject,styleProject, valueEnv, styleEnv, valueEnv2,
    styleEnv2}) => {
    return (
        <div className={style}>
            <Textos value={valueDev} style={styleTextDev}/>
            <Textos value={valueProject} style={styleProject}/>
            <Textos value={valueEnv} style={styleEnv}/>
            <Textos value={valueEnv2} style={styleEnv2}/>
        </div>
    );
}

export default Cards;
