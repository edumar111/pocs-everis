import React from 'react';

import './register-layout.css';

function RegisterLayout(props) {
  return (
    <div className="RegisterLayout">
       
           
              <div className="form-group">
                <label >First Name</label>
                <input type="text" className="RegisterLayout-input" id="firstName"  placeholder="Enter first Name" 
                value={props.firstname} onChange={props.handleFirstnameChange}/>
              </div>
              <div className="form-group">
                <label >Last Name</label>
                <input type="text" className="RegisterLayout-input" id="lastName"  placeholder="Enter last Name" 
                value={props.lastname} onChange={props.handleLastnameChange}/>
              </div>

              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="RegisterLayout-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" 
                value={props.email}  onChange={props.handleEmailChange} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
              <label >Password:</label>
              <input type="password" className="RegisterLayout-input" id="pwd"
              value={props.password}  onChange={props.handlePasswordChange} 
              />
            </div>
             <div className="form-row">
              <div className="form-group  col-md-8 col-md-offset-4">
                  <button  className="RegisterLayout-btn" onClick={props.handleAuth} >Create</button>
            
               </div>  
             </div>   
  
    </div>
  )
}

export default RegisterLayout;
