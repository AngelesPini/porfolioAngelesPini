import React from 'react';
import Textos from '../textos/textos';
import { Link } from 'react-router-dom';

import EMial from '../../assets/mail.png'
import Github from '../../assets/github.png'
import In from '../../assets/linkedin.png'
import Resume from '../../assets/resume.png'

import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialMedia">
                <Link to='https://www.linkedin.com/in/angeles-pini/' target='_blank'><img src={In} alt="linkedin" /></Link>

                <Link to='https://github.com/AngelesPini' target='_blank'><img src={Github} alt="linkedin" /></Link>

                <Link to='https://drive.google.com/file/d/1dim1aH_E9imrLGlXOrKuVvLNdhoC2JJP/view?usp=sharing' target='_blank'><img src={Resume} alt="linkedin" /></Link>
            </div>
            <div className="email">
                <img src={EMial} alt="icono de email" />
                <Textos value='angelesbpini@gmail.com' style='footerText'/>
            </div>

        </div>
    );
}

export default Footer;
