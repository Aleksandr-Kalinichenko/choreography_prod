import React from 'react'
import classes from './NewsCreator.module.css'
import swal from 'sweetalert';

import Axios from 'axios'
class NewsCreator extends React.Component{
    state={
        Img:undefined,
        Title:undefined,
        Description:undefined,
        Galery:undefined
    }
sendServerHandler = async()=>{
    const data ={
        Img:this.state.Img,
        Title:this.state.Title,
        Description:this.state.Description
    }
    try{
    const response = await Axios.post('https://choreography-4f442.firebaseio.com/News.json',data)
console.log(response.data)
swal("Данные загружены на сервер", {
    icon: "success",
  });    
}catch(e){
    console.log(e)
    swal("Данные не загружены на сервер", {
        icon: "warning",
      }); 
}
   
}
onSubmitHandlerGalery=async (event)=>{
   const data={
        Galery:this.state.Galery
    }
  try{  event.preventDefault()
    if(this.state.Galery){
        const response = await Axios.post('https://choreography-4f442.firebaseio.com/Galery.json',data)
       console.log(response.data)
swal("Данные загружены на сервер", {
    icon: "success",
  });    
}else{
    swal("Данные не введены", {
        icon: "warning",
      });
}}catch(e){
    console.log(e)
    swal("Данные не загружены на сервер", {
        icon: "warning",
      }); 
    }}
    onSubmitHandler= (event)=>{
        event.preventDefault()
       
        if(this.state.Title!==undefined & this.state.Img!==undefined & this.state.Description!==undefined){
            this.sendServerHandler();
       }else{

            console.log(this.state)
            swal({
                text : "Вы уверены что хотите отправить данные с незаполнеными полями?",
                title : "Одно из полей пустое",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    this.sendServerHandler()
                } 
              });
        }
    }
    render(){
        return(<div className={classes.NewsCreator+" container-fluid"}> 
        <div className="row">
<form onSubmit={this.onSubmitHandler} className={classes.NewsForm+" col-12 offset-xl-4 offset-lg-3 offset-md-1 col-xl-4"}>
<h1>Добавление новостей</h1>
<h3>Название</h3>
    <input placeholder = "Название" onChange={(e) => this.setState({Title:e.target.value})}/>
<h3>Cсылка на картинку</h3>
    <input placeholder="Cсылка на картинку" onChange={(e) => this.setState({Img:e.target.value})}/>
<h3>Описание</h3>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="4" onChange={(e) => this.setState({Description:e.target.value})}></textarea>
<button className="btn btn-success col-12">Добавить новость</button>
</form></div>
<div className="row">

<form onSubmit={this.onSubmitHandlerGalery} className={classes.NewsForm+" col-12 offset-xl-4 offset-lg-3 offset-md-1 col-xl-4"}>
<h3>Cсылка на картинку</h3>
<input placeholder="Cсылка на картинку" onChange={(e) => this.setState({Galery:e.target.value})}/>
<button className="btn btn-success col-12">Добавить каритнку</button>

</form></div>



        </div>) }
      
}
export default NewsCreator