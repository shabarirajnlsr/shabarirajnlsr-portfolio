import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './Hire.css'

class Hire extends Component {
     render() {
          const {changeshow} = this.props
          return (
               <div className='maincard'>
               <div className='cardmainpg'>
                    <Icon className='closebtn' name='close' onClick={changeshow} />
                    <div className='welcome-card'>
                         <h1>Welcome sir/ma'am</h1>
                         <div className='cardmain'>
                         <h1>React developer</h1>
                         <p>My Skill is to design more interactive User interface (UI) and User experience (UX) Web Applications.</p>
                         <p>If you are searching for a reputable web developer with proven hands-on skills.then, you're in the right place.<b>Get in touch to discuss your needs now!</b></p>
                         <p><Icon name='mail' />shabarirajnlsr@gmail.com</p>
                         <p><Icon name='phone' />8248478881 , 9566371674</p>
                         </div>
                    </div>
               </div>
               </div>
          )
     }
}
export default Hire;