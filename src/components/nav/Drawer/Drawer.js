import React from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'
const links =[
  {to:'/',label:'Новини',exact:true,},
  {to:'/Galery',label:'Галерея'},
  {to:'/Biblio',label:'Біблиотека'},
  {to:'/QuizList',label:'Тести'},
  {to:'/About',label:'Про автора'},

//   {to:'/News-creator',label:'NewsAdd'},


]

class Drawer extends React.Component{
    ClickHandler=()=>{
        this.props.onClose();
    }
    renderLinks(){
        return links.map((link,index)=>{
        return(<li key={index}>
<NavLink
to={link.to}
exact={link.exact}
activeClassName={classes.active}
onClick={this.ClickHandler}
        >{link.label}</NavLink>
        </li>)
        })
    }
    render(){
        const cls =[classes.Drawer]
        if(!this.props.isOpen){
            cls.push(classes.close)
        }
    return(<React.Fragment>
<nav className={cls.join(' ')}>
    <ul>
        {this.renderLinks()}
    </ul>
</nav>
{this.props.isOpen ? <Backdrop  onClick={this.props.onClose}/> : null}</React.Fragment>
    )}
}

export default Drawer