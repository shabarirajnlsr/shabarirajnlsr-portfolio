import React from 'react'
import { Icon } from 'semantic-ui-react';
import './footer.css'

class Footer extends React.Component{

     render(){
          return(
               <div className='footermain'>
                    
                    <div className='mainfoot'>
                         <h3>Web Developer in React</h3>
                         <h3><a target='blank' href='https://github.com/shabarirajnlsr'><Icon name='github' color='black' size='large'/></a><a target='blank' href='https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:13277554/'><Icon name='linkedin' color='black' size='large'/></a></h3>  
                         <h3>&copy;Copyright@2021</h3>
                         <h3>Designed by Shabariraj N</h3>
                    </div>
               </div>
          )
     }
}
export default Footer;