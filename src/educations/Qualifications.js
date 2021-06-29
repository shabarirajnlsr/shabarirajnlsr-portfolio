import React from 'react'
import { Icon } from 'semantic-ui-react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Nav'
import './qualification.css'

 
class Qualifications extends React.Component{

     render(){
          return(
               <div>
                    <Nav/>
                    <div>
                         <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <h3>Work Experience</h3>
                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <h2>NTT Data</h2>
                                        <h3>17-Feb 2020</h3><h5> on this date, I joined in NTT Data company.<br/><br/>
                                        <Icon name='hand point right'/> I have worked in medical adjudication process.<br/><br/>
                                        <Icon name='hand point right'/> In that process, i have verify and validate the medical claims. 
                                        </h5>
                                   </div>
                              </div>
                              </div>
                         </div>
                         <div className='educationhead'>
                              <h3>EDUCATIONAL QUALIFICATION</h3>
                         </div>
                         <div className='edumain'>
                              <div className='maincard'>
                                   <div className='cardcollege'>
                                        <h2><Icon name='graduation cap' color='blue'/>DEGREE</h2>
                                        <img className='collegeimage' src='https://images.unsplash.com/photo-1534009916851-7850ba974f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80' alt='graduation' />              
                                        <h3>Sri Krishna Adithya College of Arts and Science</h3>
                                        <h4>Bachelor of Science in Computer Technology [B.sc(CT)]</h4>
                                        <p>year: 2016 to 2019</p>
                                        <h4><b>Aggregate:</b> 64.9</h4>
                                        <label>Total:</label>&nbsp;&nbsp;
                                        <progress value='64.9' min='0' max='100'/> 
                                   </div>
                                   <div className='cardcollege'>
                                        <h2><Icon name='user' color='blue'/>HIGHER SECONDARY</h2>
                                        <img className='collegeimage' src='https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='12th' />                                             <h3>Motherlaand matric higher secondary school</h3>
                                        <h4>12<sup>th</sup> Maths with Computer science</h4>
                                        <p>year: 2014 to 2016</p>
                                        <h4><b>Aggregate:</b> 58.16</h4>
                                        <label>Total:</label>&nbsp;&nbsp;
                                        <progress value='58.16' min='0' max='100'/> 
                                   </div>
                                   <div className='cardcollege'>
                                        <h2><Icon name='user' color='blue'/>SECONDARY SCHOOL</h2>
                                        <img className='collegeimage' src='https://images.unsplash.com/photo-1580968895877-a19ec54aadc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='10th' />
                                        <h3>Shirushti vidhyalaya matric higher secondary school</h3>
                                        <h4>10<sup>th</sup></h4>
                                        <p>year of passing: 2014</p>
                                        <h4><b>Aggregate:</b> 85.2</h4>
                                        <label>Total:</label>&nbsp;&nbsp;
                                        <progress value='85.2' min='0' max='100'/> 
                                   </div>
                              </div>
                         </div>
                     <hr/>
                     <div className='educationhead'>
                          <h3>PROJECTS</h3>
                     </div>
                         <div className='projcont'>
                              <h4>These projects are done in React. while,learning time itself, i had done a hands-on practice with the help of using small functionality</h4>
                              <h4><Icon name='hand point right' color='blue' />EMI-Calculator</h4>
                              <h4><Icon name='hand point right' color='blue' />COVID-19 Details</h4>
                              <h4><Icon name='hand point right' color='blue' />multiplication-Tables</h4>
                              <h4>If you want to see my projects, below there is a card. In that, <i style={{fontSize:'18px'}}>click view</i> button is available to see my projects </h4>
                         </div>
                         <div className='maincard'>
                              <div className='mainproject'>
                                   <div className='covidcard'>
                                        <h2>COVID-19</h2>
                                        <hr/>
                                        <img className='covidpic' src='covid19.png' alt='covidsnap'/>
                                   </div>
                                   <div className='covidcontent'>
                                        <h3>Description</h3>
                                        <p>Currently, in India there are lot of covid cases are affected. Regarding these details i had created a website called COVID_19 Details</p>
                                        <h4><b>Developed in React</b></h4>
                                        <button><a style={{color:'rgb(22, 22, 199)'}} target='blank' href='https://covid-19-indiainfo-nlsr.netlify.app/'>Click view</a></button>
                                   </div>
                              </div>
                              <div className='mainproject'>
                                   <div className='covidcard'>
                                        <h2>EMI Calculator</h2>
                                        <hr/>
                                        <img className='covidpic' src='emicalc.png' alt='calculatesnap'/>
                                   </div>
                                   <div className='covidcontent'>
                                        <h3>Description</h3>
                                        <p>Here, EMI calculator is used to calculate the amount of interest with the help of time duration for getting the loan amount. through this website.</p>
                                        <h4><b>Developed in React</b></h4>
                                        <button><a style={{color:'rgb(22, 22, 199)'}} target='blank' href='https://emicalc-nlsr1.netlify.app/'>Click view</a></button>
                                   </div>
                              </div>
                              <div className='mainproject'>
                                   <div className='covidcard'>
                                        <h2>MULTIPICATION TABLES</h2>
                                        <hr/>
                                        <img className='covidpic' src='tables.png' alt='multitablesnap'/>
                                   </div>
                                   <div className='covidcontent'>
                                        <h3>Description</h3>
                                        <p>For childrens, can able to learn multiplication tables using in this website.</p>
                                        <h4><b>Developed in React</b></h4>
                                        <button><a style={{color:'rgb(22, 22, 199)'}} target='blank' href='https://multiplytables-nlsr2.netlify.app/'>Click view</a></button>
                                   </div>
                              </div>
                         </div>
                         <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <h3>Academic Projects</h3>
                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <h2>Preventing DOS & MITM Attack</h2>
                                        <h3>Description:</h3><h5>DDOS and MITM attack <br/><br/>
                                        <Icon name='hand point right'/>A MitM attack is one of the oldest forms of cyberattack wherein the attacker intercepts communications between two parties to eavesdrop secretly. They can also alter traffic traveling between them. It can be used to spy on the victim, corrupt data, sabotage communications, or steal personal information. Here are some common types of MitM attacks<br/><br/>
                                        <Icon name='hand point right'/>Denial-of-service (DoS) and distributed denial-of-service (DDoS) attacks target the victim’s system’s resources to prevent them from responding to service requests. They are launched from a large number of host machines controlled by the attacker.</h5>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
                    <Footer/>
               </div>
          )
     }
}
export default Qualifications