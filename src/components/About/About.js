import React from 'react'
import classes from './About.module.css'
const About = () =>{
    return(
    <div className={classes.About}>
        <div className={" col-xl-6 offset-xl-3 offset-lg-1 col-lg-6 " +  classes.AboutPage}>
<h1 className={classes.Name}>Добролюбова Наталія Володимирівна</h1>
<br/>
<h4 className={classes.Info}>Освіта: Національний педагогічний університет ім. М. П. Драгомановa, м. Київ <br/>Спеціальність: "Xореографія"</h4>
<br/>
<h4>Кваліфікація: балетмейстер-викладач класичного танцю </h4><br/> 
<h4>Місце роботи: КЗ «Харківський вищий коледж мистецтв»</h4><br/>
 <h4> Посада: викладач</h4><br/> 
<h4>Aспірантура: Українська інженерно-педагогічна академія, м.Харків</h4><br/>
<h4 className={classes.Email}>E-mail: dobranata1978@gmail.com</h4>
<br/>

  </div>
    </div>)
}

export default About