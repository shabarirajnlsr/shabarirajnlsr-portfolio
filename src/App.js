import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './About/About';
import Qualifications from './educations/Qualifications';
import Home from './Home/Home';
import Contact from './contact/Contact';
import Skills from './skills/Skills';
import Error from './Error';


class App extends React.Component{
     render(){
          return(
               <div>
                    <Router>
                    <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/qualifications' component={Qualifications}/>
                    <Route path='/skills' component={Skills} />
                    <Route path='/contact' component={Contact}/>
                    <Route path='*' component={Error}/>
                    </Switch>
                    </Router>
               </div>
          )
     }
}
export default App;