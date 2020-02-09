import React from 'react'
import classes from './Biblio.module.css'
import { Link } from 'react-router-dom'
class Biblio extends React.Component{
    render(){
        return(
            <div className={classes.Biblio+ " container-fluid"}>
                <div className={classes.BiblioBlock+ " row"}>  
                <div className="col-xl-6">              
                <h1>Студентам</h1>
                <h3><a href='https://drive.google.com/open?id=194ml1Oux9VsESQhafZP1BWHIQnVZX1kU' without='true' rel="noopener noreferrer" target='_blank' >Опорні конспекти</a></h3>
                <Link to='/QuizList'><h3>Тестові матеріали</h3></Link></div>
                <div className="col-xl-6">                <h1>Користні матеріали</h1>
                <h3><a href='https://drive.google.com/open?id=1TTy3x9GQAmxVsUPMLX_W_w7bTFdP17x0' without='true' rel="noopener noreferrer" target='_blank'>Класичний танець</a></h3>
                <h3><a href='https://drive.google.com/open?id=1q-xrY4ltyXOyraNBU9MyE-y80JsmcAza' without='true' rel="noopener noreferrer" target='_blank'>НСТ</a></h3>
                <h3><a href='https://drive.google.com/open?id=1HhUyWD6gr9PgMRcrxh3pRZu-weiLQhvF'without='true' rel="noopener noreferrer" target='_blank'>Історико-битовий танець ОАМ</a></h3>
                <h3><a href='https://drive.google.com/open?id=1nv0Hpsm-ezW-HdqBEAOFt0z-jDtcop1I' without='true' rel="noopener noreferrer" target='_blank'>Сучасний та балетний танець</a></h3>
                <h3><a href='https://drive.google.com/open?id=1mNBVLvE545a2M59u2j9TZXUcC6DYwGv0' without='true' rel="noopener noreferrer" target='_blank'>Гімнастика медицина</a></h3>
                <h3><a href='https://drive.google.com/open?id=16ArUGwAC3JOVvzYsMSXvfZitXXtjgPUG' without='true' rel="noopener noreferrer" target='_blank'>Різне</a></h3>
                <h3><a href="https://drive.google.com/file/d/1YEDwtZ3bDVpRmIJGlxqseUK-OPlQ6Wo1/view" without='true' rel="noopener noreferrer" target="_blank">Відео</a></h3>
                </div></div>


            </div>
        )
    }
}

export default Biblio