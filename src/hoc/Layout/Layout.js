import React from 'react'
import classes from './Layout.module.css'
import Menu from '../../components/nav/Menu/Menu'
import Drawer from '../../components/nav/Drawer/Drawer'


class Layout extends React.Component{
    state ={
        menu:false
      }
    onCloseHendler = ()=>{
      this.setState({
        menu:false
      })
    }
    MenuToggleHandler =()=>{
    this.setState({
      menu:!this.state.menu
    })
    }
render(){
    return(
        <div className={classes.Layout}>
      <Menu 
      onToggle= {this.MenuToggleHandler}
      isOpen={this.state.menu}
      />
      <Drawer
      isOpen={this.state.menu}
      onClose={this.onCloseHendler}
      />      
        <main>
          { this.props.children }
        </main>
        </div>
    )
}

}

export default Layout