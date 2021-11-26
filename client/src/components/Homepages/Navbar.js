import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.jpg';
import { useEffect, useState } from "react";




const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const actToggle=()=>{
        setToggle(!toggle)
    }

    const closeNavbar=()=>{
        if(toggle ===true){
            setToggle(false)

        }
    }
    return (
        <div className="nav-container">
           <nav>
               <div className="logoBtn">
                <Link to="/"><img src={Logo} alt=""/></Link>
                <div className="btn" onClick={actToggle}>
                <div className={toggle ? "bar1 animateBar":"bar bar1"}></div>
                <div className={toggle ? "bar2 animateBar":"bar bar2"}></div>
                <div className={toggle ? "bar3 animateBar":"bar3"}></div>
               
               </div>
               </div>
               <div className= "links-container">
                 <ul className={toggle ? "new-links links":"links"} onClick={closeNavbar}>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/">About</Link></li>
                     <li><Link to="/">Education</Link></li>
                     <li><Link to="/">Experience</Link></li>
                     <li><Link to="/">Projects</Link></li>
                     <li><Link to="/">Contact</Link></li>
                     <li className="admin"><Link to="/">Admin</Link></li>
                 </ul>
            </div>
           </nav>

        </div>
    )
}

export default Navbar
