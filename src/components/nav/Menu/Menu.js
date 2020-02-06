import React from 'react'
import classes from './Menu.module.css'

const Menu = props =>{
    const cls = [
        classes.Menu, 'fa',

    ]

    if (props.isOpen){
        cls.push(classes.open)
        cls.push('fa-times')
    }else{
        cls.push('fa-bars')
    }
    return(<div>
       <h1 onClick={props.onToggle} className={cls.join(' ')}>&nbsp;&nbsp;&nbsp;Навигация </h1></div>
    )
}

export default Menu