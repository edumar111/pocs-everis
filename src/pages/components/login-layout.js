import React from 'react';

import './login-layout.css';

function LoginLayout(props) {
  return (
    <div className="LoginLayout">
       
         

              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="LoginLayout-input" id="email" aria-describedby="emailHelp" 
                placeholder="Enter email" 
                value={props.username}  onChange={props.handleUsernameChange} />
                
              </div>
              <div className="form-group">
              <label >Password:</label>
              <input type="password" className="LoginLayout-input" id="pwd"
              placeholder="Enter password" 
              value={props.pass}  onChange={props.handlePassChange} 
              />
            </div>
             <div className="form-row">
              <div className="form-group  col-md-8 col-md-offset-4">
                  <button  className="LoginLayout-btn" onClick={props.handleLogIn} >Login</button>
            
               </div>  
             </div>   
  
    </div>
  )
}

export default LoginLayout;
