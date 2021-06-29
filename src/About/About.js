import React from 'react'
import { Icon } from 'semantic-ui-react';
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import './about.css'

class About extends React.Component{
render(){
     return(
          <div>
               <Nav/>
                    <div className='wholeabt'>
                         <h1 style={{padding:'15px'}}>About Me</h1>
                         <div>
                              <div className='abtme'>
                                   <img className='abtimage' src='profile pic.jpg' alt='No'/>
                                   <div className='personalinfo'>
                                        <h2 style={{padding:'10px'}}>Personal Details:-</h2>
                                        <h3><Icon name='hand point right' color='blue' /><b>Name :</b> Shabariraj N</h3>
                                        <h3><Icon name='hand point right' color='blue' /><b>Age :</b> 22</h3>
                                        <h3><Icon name='hand point right' color='blue' /><b>Date Of Birth :</b> 17/11/1998</h3>
                                        <h3><Icon name='hand point right' color='blue' /><b>Degree :</b> Bachelor Of Science in Computer Technology [B.sc (CT)]</h3>                       
                                        <h3><Icon name='hand point right' color='blue' /><b>Email :</b> shabariraj1998@gmail.com , shabarirajnlsr@gmail.com</h3>
                                        <h3><Icon name='hand point right' color='blue' /><b>Mobile number:</b> 9566371674 , 8248478881</h3>                       
                                   </div>  
                              </div>     
                               <hr/>
                              <div className='mentallyhobby'>
                                   <h2>Hobbies:-</h2>
                                   <h4><Icon name='hand point right' color='blue' />While playing these games, i'll be fresh and enthusiastic regarding in work and my personal thoughts also..</h4>
                                   <div className='ccimage'>
                                             <div className="carromgame">
                                                  <img className='carromimage' src='https://images.unsplash.com/photo-1620741212082-4e5c8194883e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80' alt='carromboard'/>
                                                  <h3>Carromboard</h3>
                                             </div>
                                             <div className="chessgame">
                                                  <img className='chessimage' src='https://images.unsplash.com/photo-1608677827163-62fe6700203a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZXNzJTIwYm9hcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' alt='chess'/>
                                                  <h3>Chess</h3>
                                             </div>
                                        </div>         
                                   </div>  
                                   <hr/>
                                   <div className='technical'>
                                        <h2>Technical skills:</h2>
                                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a React Developer, I have lots of interest in thinking new functionality and creating designing a website. I have the capability of managing work pressure. And also, i have a very good hands-on experience in front-end developement and currently learning back-end development also</h3>
                                        <h4><Icon name='hand point right' color='blue' />HTML</h4>
                                        <h4><Icon name='hand point right' color='blue' />Css</h4>
                                        <h4><Icon name='hand point right' color='blue' />JavaScript</h4>
                                        <h4><Icon name='hand point right' color='blue' />JQuery</h4>
                                        <h4><Icon name='hand point right' color='blue' />Bootstrap</h4>
                                        <h4><Icon name='hand point right' color='blue' />React</h4>
                                   </div>
                                   <hr/>
                                   <div className='language'>
                                        <h2>Language Known:</h2>
                                        <h3><Icon name='hand point right' color='blue' /><b>Speak :</b> English, Tamil, Telugu</h3>
                                        <h3><Icon name='hand point right' color='blue' /><b>Write :</b> English, Tamil</h3>
                                   </div> 
                         </div>     
                     </div>
                    <Footer/>    
          </div>
     )
}
}
export default About;