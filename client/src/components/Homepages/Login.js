import React from 'react';
// import Register from './Register';
import {Link} from 'react-router-dom';
import './Login.css'; 


const Login = () => {
    return (
         
    <> 
       <div className="login">
                <div className="main-container">
                    <h3>Login for admin</h3>
                </div>
                <div className="login-center">
                    <form>
                        <p> you edited it</p>
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder='import email...' name="email" required/>
                        
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder='import password...' name="password" required/>

                        <div className="login-btn">
                            <button type='submit'>login</button>
                            <Link to='/'><button>Back to home</button></Link>
                            </div>

                    </form>
                    
                </div>
            </div>
            {/* register */}
            {/* <Register/> */}
    </>
    )
}

export default Login
