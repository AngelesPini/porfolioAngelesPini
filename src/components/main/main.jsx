import React from 'react';
import Textos from '../textos/textos';
import CardsGroup from '../cardsGroup/cardsGroup';

import './main.css'
const Main = () => {
    return (
        <div className='main'>
            <div className="titleMAin">
                <Textos value='PROYECTOS' style='titleSection'/>
            </div>
            <CardsGroup style='card amarillo' valueDev='REACT.JS  - S/SENIOR'
            styleTextDev='bodyCard'
            valueProject='BELFORT'
            styleProject='titleCard'
            valueEnv='EN COLABORACIÓN CON'
            styleEnv='bodyCard'
            valueEnv2='PÚBLICA COMUNICACIONES'
            styleEnv2='bodyCardItalic'
            linkTo='https://www.belfortlanguage.com/'
            linkTo2='https://icarotechnologies.tech/'
            style2='card naranja' 
            valueDev2='REACT.JS  - S/SENIOR' 
            valueProject2='ICARO'
            valueEnv22='EN COLABORACIÓN CON '
            valueEnv222='CODERHOUSE TOP10 TEAM'
            linkTo3='https://wicca-shop.vercel.app/'
            style3='card rojo'
            valueDev3='REACT.JS  - JUNIOR'
            valueProject3='WICCA'
            valueEnv3='PROYECTO DE NIVEL ACADÉMICO'
            valueEnv23=''

            />
            <CardsGroup style='card verde' valueDev='REACT.JS - ATOMIC DESIGN'
            styleTextDev='bodyCard'
            valueProject='T-BREIN'
            styleProject='titleCard'
            valueEnv='EN COLABORACIÓN CON'
            styleEnv='bodyCard'
            valueEnv2='FLIPA'
            styleEnv2='bodyCardItalic'
            linkTo='https://github.com/somosFlipa/atomicdesign'
            linkTo2='https://github.com/AngelesPini/creativeFlipa'
            style2='card azul' 
            valueDev2='REACT.JS - NEWBIE' 
            valueProject2='CREATIVE'
            valueEnv22='EN COLABORACIÓN CON '
            valueEnv222='FLIPA'
            linkTo3='https://github.com/AngelesPini/marketingFlipa'
            style3='card violeta'
            valueDev3='REACT.JS  - NEWBIE'
            valueProject3='MARKETING'
            valueEnv3='EN COLABORACIÓN CON '
            valueEnv23='FLIPA'
            />

            <CardsGroup style='card morado' valueDev='REACT.JS  - NEWBIE'
            styleTextDev='bodyCard'
            valueProject='CRYPTO'
            styleProject='titleCard'
            valueEnv='EN COLABORACIÓN CON'
            styleEnv='bodyCard'
            valueEnv2='FLIPA'
            styleEnv2='bodyCardItalic'
            linkTo='https://github.com/AngelesPini/cryptoFlipa'
            linkTo2='https://github.com/AngelesPini/ejemploJScoderhouse'
            style2='card magenta' 
            valueDev2='JAVASCRIPT - S/SENIOR' 
            valueProject2='WICCA.JS'
            valueEnv22='PROYECTO CREADO PARA ALUMNOS'
            valueEnv222='CODERHOUSE'
            linkTo3='https://github.com/AngelesPini/NAZARindumentaria'
            style3='card fucsia'
            valueDev3='WEB DEVELOPMENT - SENIOR'
            valueProject3='NAZAR IND'
            valueEnv3='PROYECTO DE NIVEL ACADÉMICO'
            valueEnv23='CODERHOUSE'
            />
        </div>
    );
}

export default Main;
