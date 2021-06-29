import React from 'react'
import { Icon } from 'semantic-ui-react'
import Footer from '../footer/Footer'
import Nav from '../navbar/Nav'
import './contact.css';

 
class Contact extends React.Component{

     render(){
          return(
               <div>
                    <Nav/>
                    <div className='contmain'>
                         <div classname='contactmain'>
                              <h1 style={{textAlign:'center'}}>Contact us</h1>
                              <hr/>
                              <h3><Icon name='address card' color='blue'/> Address: &nbsp;&nbsp;23, sakthi vinayagar kovil street,<br/> telungupalayam pudur,<br/>coimbatore,<br/>pin-641039</h3>
                              <h3><Icon name='mobile alternate' color='blue'/> Mobile: &nbsp;&nbsp; 9566371674 - 8248478881</h3>
                              <h3><Icon name='envelope' color='blue'/> Email: &nbsp;&nbsp; shabariraj1998@gmail.com - shabarirajnlsr@gmail.com</h3>
                         </div>
                    </div>     
                    <div>
                         <iframe
                         id="JotFormIFrame-211571596915463"
                         title="Responsive Wordpress Sidebar Contact Form "
                         onload="window.parent.scrollTo(0,0)"
                         allowtransparency="true"
                         allowfullscreen="true"
                         allow="geolocation; microphone; camera"
                         src="https://form.jotform.com/211571596915463"
                         frameborder="0"
                         style={{minWidth:'100%',height:'539px',border:'none'}}>
                       </iframe>
                         </div>
                         <Footer/>      
               </div>
          )
     }
}
export default Contact;