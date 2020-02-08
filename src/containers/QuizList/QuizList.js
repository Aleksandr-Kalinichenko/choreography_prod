import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {  Link } from 'react-router-dom'
import AboutStudent from '../../components/aboutStudent/aboutStudent'
import swal from 'sweetalert';

export default class QuizList extends Component{
    state={
        Name:null,
        Email:null,
        logined:false,
    }
    renderQuizes(){
        return[1,2,3].map((quiz,index)=>{
            return(
                <li
                key={index}
                >
<Link to={{pathname:'/quiz/'+quiz,state:{data:this.state}}}>
    Тест {quiz}
</Link>
                </li>
            )
        })
    }
    OnChangeTextName=(e)=>{

this.setState({
    Name:e.target.value
})
    }
    OnChangeTextEmail=(e)=>{

        this.setState({
            Email:e.target.value
        })
            }
    onButtonPress=()=>{
        if(this.state.Name !== null & this.state.Email!==null){
this.setState({
    logined:true
})

swal("Добро пожаловать "+this.state.Name, {
    icon: "success",
  });
        }else{
            swal("Введены не все поля", {
                icon: "warning",
              });
        }
    }
    render(){
        return(
            this.state.logined ? 
            <div className={classes.QuizList+" container-fluid"}>
                <h1>Список тестів:</h1>

                <div className={classes.TestBlock+ "  col-lg-4 offset-lg-4 col-xl-4 offset-xl-4"}>
                <ul>
                {this.renderQuizes()}
                </ul></div>
            </div> :  <AboutStudent
                onButtonPress={this.onButtonPress}
                OnChangeTextName={this.OnChangeTextName}
                OnChangeTextEmail={this.OnChangeTextEmail}
                />
        )
    }
}

