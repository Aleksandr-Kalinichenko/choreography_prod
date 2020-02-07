import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import News from './containers/News/News'
import About from './components/About/About'
import NewsCreator from './containers/NewsCreator/NewsCreator';
import Galery from './containers/Galery/Galery'
class App extends React.Component{

  render(){
    return(
      <Layout>
<Switch>
<Route path="/" component={News} exact/>
<Route path="/About" component={About} exact/>
<Route path="/News-creator" component={NewsCreator} exact/>
<Route path="/Galery" component={Galery}/>
  <Redirect to={'/'}/>
</Switch>
      </Layout>
    )
  }
}

export default App;
