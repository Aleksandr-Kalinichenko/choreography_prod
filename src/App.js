import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import News from './containers/News/News'
import About from './components/About/About'
import NewsCreator from './containers/NewsCreator/NewsCreator';
import Galery from './containers/Galery/Galery'
import QuizList from './containers/QuizList/QuizList'
import Quiz from './containers/Quiz/Quiz'
import Biblio from './containers/Biblio/Biblio'
class App extends React.Component{

  render(){
    return(
      <Layout>
<Switch>
<Route path="/" component={News} exact/>
<Route path="/About" component={About} />
{/* <Route path="/News-creator" component={NewsCreator} /> */}
<Route path="/Galery" component={Galery}/>
<Route path="/QuizList"  component={QuizList}/>
<Route path="/Quiz/:id" component={Quiz}/>
<Route path="/Biblio" component={Biblio}/>

  <Redirect to={'/'}/>
</Switch>
      </Layout>
    )
  }
}

export default App;
