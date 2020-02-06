import React from 'react'
import classes from './News.module.css'
class News extends React.Component{

    state={
        News:[{
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        },
        {
            Title:"название новости",
            Img:"/img",
            description:"какое то описание"
        }]
    }

    RenderNewsHandler = () =>{
return(
    this.state.News.map((New,index)=>{
        return(
            <div key={index} className={classes.NewsDiv+ " col-xl-3 col-ms-12"}>
            <h1>{New.Title}</h1>
            <h1>{New.Img}</h1>
            <h1>{New.description}</h1></div>

        )
    })
)
    }
render(){
return(
    <div className={classes.News +" container-fluid"}>
<div className="row new_row offset-xl-2">{this.RenderNewsHandler()}</div>
    </div>
)
}
}

export default News