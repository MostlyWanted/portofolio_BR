import React from 'react';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="main-title">
           <h2 className="title contact-title">

           </h2>
       </div>

       <div className="main-contact">
           <div className="contact">
               <div className="contact-center">
                   {/* links */}
                   <div className="contact-center-links">
                       <h3>Links</h3>
                       <div className="contact-links">
                           <li><Link to='/'>Home
                               </Link></li>
                           <li><Link to='/'>About
                               </Link></li>
                           <li><Link to='/'>Education
                               </Link></li>
                           <li><Link to='/'>Experience
                               </Link></li>
                           <li><Link to='/'>Projects
                               </Link></li>
                           <li><Link to='/'>Contact
                               </Link></li>
                           <li className='admin'><Link to='/'>Admin
                               </Link></li>
                           <li className='login'><Link to='/'>Login
                               </Link></li>
                       </div>
                   </div>

                   {/* media */}
                   <div className="contact-center-media">
                       <h3>Media</h3>
                       <div className="contact-media">
                           <li><a href="#"><i className="fab fa-github-square"></i>GitHub</a></li>
                           <li><a href="#"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
                       </div>
                   </div>
               </div>
           </div>
           <div className="footer">
               <p>Designed and created by Bijan 2021</p>
           </div>
       </div>
       </React.Fragment>
    )
}

export default Footer
