import React from 'react';
import Typewriter from "typewriter-effect";

import './type.css'

const TypeWriter = ({style}) => {
    return (
<div className={style}>
      <Typewriter
       options={{loop: true,}}
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Front-End Developer")

         

       .pauseFor(1000)
       .deleteAll()
       .typeString("Workaholic")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Profesora")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Estudiante de videojuegos")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Autodidacta")

       .pauseFor(1000)
       .deleteAll()
       .typeString("Freelancer")
       .start()
       ;
       }}
       />
    </div>
    );
}

export default TypeWriter;
