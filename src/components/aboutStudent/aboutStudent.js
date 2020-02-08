import React from 'react'
import classes from './aboutStudent.module.css'

const aboutStudent =props=>{
return(
    <div className={classes.aboutStudent+ " container-fluid"}>
       <h1>Представтесь</h1>
        <div className={classes.aboutStudentBlock+ " row "}>
        <h2><i className="far fa-user"></i>&nbsp; Фамилия имя</h2>
        <input   onChange={(event)=>{props.OnChangeTextName(event)}}></input>
        <h2> <i className="far fa-envelope-open"></i>&nbsp;&nbsp;E-mail</h2>
        <input onChange={(event)=>{props.OnChangeTextEmail(event)}}></input>
        <button onClick={props.onButtonPress} className={classes.Sbtn+" btn btn-dark"}>Перейти к тестам</button></div>
    </div>
)
}

export default aboutStudent
