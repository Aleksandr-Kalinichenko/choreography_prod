import React from 'react'
import classes from './Galery.module.css'
import Axios from 'axios'
import swal from 'sweetalert';

class Galery extends React.Component{
    state={
Galery:['https://i.gifer.com/VAyR.gif']
    }
componentDidMount = async()=>{
let data=[];
const Galery=[];
try{  const response = await Axios.get('https://choreography-4f442.firebaseio.com/Galery.json');
        data = response.data
         
        }catch(e){
            console.log(e)
            swal("Данные не получены,проблема с сервером , зайдите позже", {
                icon: "warning",
              }); }
Object.keys(data).forEach((key,index)=>{
Galery.push(
   data[key].Galery

)
})
this.setState({
    Galery
})
}

RenderPhoto=()=>{
    return(
        this.state.Galery.map((data,index)=>{
            return(
                <div key={index} className={classes.GaleryBorderImage+ " col-xl-6 offset-xl-3 col-12 col-lg-6 offest-lg-3"}>
                <img src={data} alt=""  className="img-fluid" ></img></div>
            )
        })
    )
}
    render(){
        return(
            <div className={classes.Galery}>
                <h1>Галерея</h1>
{this.RenderPhoto()}
            </div>
        )
    }
}

export default Galery