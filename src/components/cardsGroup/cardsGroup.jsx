import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../cards/cards';

import './group.css'
const CardsGroup = ({style, 
    valueDev,
    styleTextDev,
    valueProject,
    styleProject,
    valueEnv,
    styleEnv,
    valueEnv2,
    styleEnv2,
    linkTo,
    linkTo2,
    style2,
    valueDev2,
    valueProject2,
    valueEnv22,
    valueEnv222,
    style3,
    valueDev3,
    valueProject3,
    valueEnv3,
    valueEnv23,
    linkTo3
}) => {
    return (
        <div className='cardsGroup'>
            <Link to={linkTo} target='_blank'><Cards style={style} valueDev={valueDev} styleTextDev={styleTextDev} valueProject={valueProject} styleProject={styleProject} valueEnv={valueEnv} styleEnv={styleEnv} valueEnv2={valueEnv2} styleEnv2={styleEnv2}/></Link>

            <Link to={linkTo2} target='_blank'><Cards style={style2} valueDev={valueDev2} styleTextDev={styleTextDev} valueProject={valueProject2} styleProject={styleProject} valueEnv={valueEnv22} styleEnv={styleEnv2} valueEnv2={valueEnv222} styleEnv2={styleEnv2}/></Link>

            <Link to={linkTo3} target='_blank'><Cards style={style3} valueDev={valueDev3} styleTextDev={styleTextDev} valueProject={valueProject3} styleProject={styleProject} valueEnv={valueEnv3} styleEnv={styleEnv} valueEnv2={valueEnv23} styleEnv2={styleEnv2}/></Link>
        </div>
    );
}

export default CardsGroup;
