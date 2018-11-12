import React from 'react';
import logo from '../../../images/logo_everis.png';
import './head-layout.css';

function HeadLayout(props) {
  return (
    <div className="HeadLayout">
        <div className="HeadLayout-header">
          <img src={logo} className="HeadLayout-logo" alt="logo" />
          <h4 className="HeadLayout-h3">Digital Lab - EVERIS</h4>

        </div>
        <br/>
        {
          !props.loginStatus && <button onClick={props.handleAuth} className="HeadLayout-btn">
          Create Identity
          </button>
        }
        {
          (props.createDid && !props.loginStatus )&& <button onClick={props.handleCreateUser} className="HeadLayout-btn">
                    Create Account
                  </button>
        }
        
        {
          (!props.createDid && !props.loginStatus) && <button onClick={props.handleLogIn} className="HeadLayout-btn">
          Login
        </button>
        }
        {
          props.loginStatus && <button onClick={props.handleLogOut} className="HeadLayout-btn">
            Logout
          </button>
        }
        
      
    </div>
  )
}

export default HeadLayout;
