import React from 'react';

import './did-layout.css';
import ImageLayout from './image-layout'
function DidLayout(props) {
  return (
    <div className="DidLayout">
        
          
          <h3>DID</h3>
     
   		 <div className='form-group'>
            <label >identity  </label>
            <br/>
            <label >{props.did}</label>
            <br/>
            <label >Address  </label>
            <br/>
            <label >{props.address}</label>
            <br/>
            <ImageLayout image={props.didUrl} message='share DID'/>
        </div>
   
    </div>
  )
}

export default DidLayout;