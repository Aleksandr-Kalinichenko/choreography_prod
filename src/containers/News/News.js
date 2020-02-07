import React from 'react'
import classes from './News.module.css'
import Axios from 'axios'
import swal from 'sweetalert';
import NewsBlock from '../../components/NewsBlock/NewsBlock'
class News extends React.Component{
    state={
        News:[
        {
            Title:"Идет загрузка новостей..",
            Img:'https://i.gifer.com/VAyR.gif',
            Description:null
        }]
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

this.setState({News:News.reverse()})
}
render(){
return(

    <div className={classes.News +" container-fluid"}>
    <h1 className="offset-xl-7">Новини</h1>    
    <div className="row">
   <NewsBlock
   News={this.state.News}
   />
    </div>
    </div>
)
}
}

export default News