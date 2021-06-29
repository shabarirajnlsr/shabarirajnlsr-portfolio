import React from 'react'
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import Hire from './Hire';
import './Home.css'

class Home extends React.Component{
     constructor(){
          super();
          this.state={
               showhire:false,
               colorname:false,
          }
     }
     componentDidMount(){
          setInterval(() => {
               this.setState({
                    colorname:!this.state.colorname,
               })
          }, 3000);
     }
     handlehire=(e)=>{
          this.setState({
               showhire:true,
          })
     }
     close=()=>{
          this.setState({
               showhire:false,
          })
     }
render(){
     const {showhire,colorname}=this.state
     return(
               <div className='homemainpg'>
                    <Nav/>
                    <div className='homemaincont'>
                    <h1 style={colorname ? {color:'blue'}:{color:'goldenrod'}}>Hi..!  I'm Shabariraj N</h1>
                    <h2>Web Developer in react</h2>
                    <button onClick={this.handlehire}>Hire-me</button><br/>
                    {showhire ?
                         <div>
                              <Hire changeshow={this.close}/>
                         </div>
                         :
                         ''
                    }
                    </div>
                    <div className='mainhtmlcode'>
                         <h2>Basic of HTML code</h2>
                         <div className='htmlbasiccode'>
                              <h5>&lt;html&gt;</h5>
                              <h5>&lt;head&gt;</h5>
                              <h5>&lt;title&gt;basic html code&lt;&#47;title&gt;</h5>
                              <h5>&lt;&#47;head&gt;</h5>
                              <h5>&lt;Body&gt;</h5>
                              <p>&lt;h1&gt; welcome to html code &lt;&#47;h1&gt;</p>
                              <h5>&lt;&#47;Body&gt;</h5>
                              <h5>&lt;&#47;html&gt;</h5>
                         </div>
                         <h4>In this code, basic of html structure has given and within the body tag we have to design our output</h4>
                    </div>
                    <hr/>
                    <div className='mainreact'>
                         <h2>Basic of React</h2>
                         <div className='basicreact'>
                              <h5>import React from 'react'<br/><br/>Class App extends React.Component<br/><br/>&#123;<br/><br/>render &#40;&#41;&#123;<br/><br/>return &#40;<br/><br/>&lt;h1&gt;welcome to React&lt;&#47;h1&gt;<br/><br/>&#41;<br/><br/>&#125;<br/><br/>&#125;<br/><br/>export default App;</h5>
                         </div>
                         <h4>In react basic code, we import a react and using class component, the class name and file name should be same for eg:(here classname App and the filename also App.js). And inside the class component there is a return type within that we using JSX Expression(Javascript and HTML).Atlast we will export the class component</h4>
                    </div>
                    <div>
                         <Footer/>
                    </div>
               </div>
     )
}
}
export default Home;