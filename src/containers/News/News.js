import React from 'react'
import classes from './News.module.css'
import Axios from 'axios'
import swal from 'sweetalert';

class News extends React.Component{
    state={
        News:[
        {
            Title:"Идет загрузка новостей..",
            Img:'https://i.gifer.com/VAyR.gif',
           Description:null
        }]
    }

    RenderNewsHandler = () =>{
return(
    this.state.News.map((New,index)=>{
        return(
            <div key={index} className="container-fluid">
                <div className="row">
            <div  className={classes.NewsDiv+ " col-xl-6 col-12 offset-xl-3"}>
            <h1>{New.Title}</h1>
            <p>{New.Description}</p>
            <img className="img-fluid" src={New.Img} alt=""/>
            </div></div></div>
        )
    })
)
    }

componentDidMount = async()=>{
let data=[];
const News=[];
try{  const response = await Axios.get('https://choreography-4f442.firebaseio.com/News.json');
        data = response.data
            
        }catch(e){
            console.log(e)
            swal("Данные не получены,проблема с сервером , зайдите позже", {
                icon: "warning",
              }); }
Object.keys(data).forEach((key,index)=>{
News.push({
    Title:data[key].Title,
    Img:data[key].Img,
    Description:data[key].Description,
})
})
this.setState({News})
}
render(){
return(

    <div className={classes.News +" container-fluid"}>
<h1 className="offset-xl-7">Новини</h1>    

<div className="row">
    
{this.RenderNewsHandler()}
</div>
    </div>
)
}
}

export default News