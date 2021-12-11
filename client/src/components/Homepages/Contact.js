import React,{useState} from 'react';
import './contact.css';
import BackImg from '../../images/im4.jpg';
import load2 from '../../images/load2.gif';
import axios from 'axios';

const Contact = () => {
    return (
        <div className="main-container">
            <div className="contactForm">
                <h2 className="title">
                    Contact form
                </h2>
                <div className="contactForm-center">
                    <div className="contact_form">
                        <form>
                            <p>message</p>

                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="import name..." required />
                            
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="import name..." required />
                            
                            <label htmlFor="name">Message</label>
                            <input type="text" placeholder="import contact reason..." required />

                            <div className="send-btn">
                                <button type="submit">Send</button>
                            </div>


                        </form>
                    </div>

                    {/* contact info */}

                    <div className="contact-info">
                        <h4>Send your message</h4>
                        <img src={BackImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
