import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.jpg'


function Navbar() {
    return (
        <div className="nav-container">
           <nav>
               <div className="logoBtn">
                <Link to="/"><img src={Logo} alt=""/></Link>
                <div className={"btn"}>
                <div className={"bar1"}></div>
                <div className={"bar2"}></div>
                <div className={"bar3"}></div>
               
               </div>
               </div>
               <div className= "links-container">
                 <ul className="links">
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/">About</Link></li>
                     <li><Link to="/">Education</Link></li>
                     <li><Link to="/">Experience</Link></li>
                     <li><Link to="/">Projects</Link></li>
                     <li><Link to="/">Contact</Link></li>
                     <li><Link to="/">Admin</Link></li>
                 </ul>
            </div>
           </nav>

        </div>
    )
}

export default Navbar
