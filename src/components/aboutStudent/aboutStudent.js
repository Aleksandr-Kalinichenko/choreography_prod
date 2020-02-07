import React from 'react'
import classes from './aboutStudent.module.css'

const aboutStudent =props=>{
return(
    <div className={classes.aboutStudent}>
        <div className="col-6 offset-3"><h1>Представтесь</h1>
        <h2>Фамилия имя</h2>
        <input onChange={(event)=>{props.OnChangeTextName(event)}}></input>
        <h2>E-mail</h2>
        <input onChange={(event)=>{props.OnChangeTextEmail(event)}}></input>
        <button onClick={props.onButtonPress} className="btn btn-success">Ок!</button></div>
    </div>
)
}

export default aboutStudent
