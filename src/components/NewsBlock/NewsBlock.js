import React from 'react'
import classes from './NewsBlock.module.css'


const NewsBlock = props =>{
    return(
        props.News.map((New,index)=>{
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


        export default NewsBlock