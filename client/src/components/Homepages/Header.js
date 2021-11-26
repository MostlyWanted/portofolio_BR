import React from 'react'
import Logo from '../../images/logo.jpg';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';


const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
            <div className="particle">
            <Particles
  height="400px"
  width="100%"
  params={{
    "particles": {
      "number": {
        "value": 100
      },
        "size":{
            "value":3
      }
    },
    "interactivity":{
        "events":{
            "onhover":{
                "enable":true,
                "mode": "repulse"
            }
        }
    }
}}/>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Header
