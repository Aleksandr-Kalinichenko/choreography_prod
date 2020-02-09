import React from 'react'
import classes from './Galery.module.css'
import Axios from 'axios'
import swal from 'sweetalert';
import PhotoBox from '../../components/PhotoBox/PhotoBox';

class Galery extends React.Component{
    state={
        currentPhoto:0,
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
    Galery:Galery.reverse()
})
}

// RenderPhoto=()=>{
//     return(
//         this.state.Galery.map((data,index)=>{
//             return(
//                 <div key={index} className={classes.GaleryBorderImage+ " col-xl-6 offset-xl-3 col-12 col-md-6 offset-md-3 col-lg-6 offest-lg-3"}>
//                 <img src={data} alt=""  className="img-fluid" ></img></div>
//             )
//         })
//     )
// }
    render(){
        return(
            <div className={classes.Galery+ " container-fluid"}>
                <h1>Галерея</h1>
               
{/* {this.RenderPhoto()} */}
<div className={classes.GaleryBorderImage+ " col-xl-8 offset-xl-2 col-12 col-md-6 offset-md-3 col-lg-6 offest-lg-3"}>
<PhotoBox src={this.state.Galery[this.state.currentPhoto]} />
</div>
<div className='row offset-xl-4 offset-sm-2 offset-1 offset-md-3'>
<i onClick={()=>{if (this.state.currentPhoto!==0){this.setState({currentPhoto:this.state.currentPhoto-1})}else{this.setState({currentPhoto:this.state.Galery.length-1})}}} className="fas fa-chevron-left col-sm-4  col-3 col-md-5 col-xl-4"></i>
<i onClick={()=>{if(this.state.currentPhoto===this.state.Galery.length-1){this.setState({currentPhoto:0})}else{this.setState({currentPhoto:this.state.currentPhoto+1})}}} className="fas fa-chevron-right col-sm-4 col-5 col-md-3 col-xl-4 "></i></div>

            </div>
        )
    }
}

export default Galery