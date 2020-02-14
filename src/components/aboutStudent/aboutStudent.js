import React from 'react'
import classes from './aboutStudent.module.css'

const aboutStudent =props=>{
return(
  
    <div className={classes.aboutStudent+ " container-fluid"}>
<a href='https://drive.google.com/open?id=194ml1Oux9VsESQhafZP1BWHIQnVZX1kU' without='true' rel="noopener noreferrer" target='_blank' >Опорні конспекти</a>

       <h1>Увійдіть для проходження тестів</h1>
        <div className={classes.aboutStudentBlock+ " row "}>
        <h2><i className="far fa-user"></i>&nbsp; Прізвище ім'я по батькові</h2>
        <input   onChange={(event)=>{props.OnChangeTextName(event)}}></input>
        <h2> <i className="far fa-envelope-open"></i>&nbsp;&nbsp;E-mail</h2>
        <input onChange={(event)=>{props.OnChangeTextEmail(event)}}></input>
        <button onClick={props.onButtonPress} className={classes.Sbtn+" btn btn-dark"}>До тестів</button></div>
    </div>

)
}

export default aboutStudent
