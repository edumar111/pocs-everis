import React from 'react';
import DidLayout from './did-layout'
import ResolveLayout from './resolve-layout'
import './register-layout.css';

function IdentityLayout(props) {
  return (
    <div className="RegisterLayout">
       
          
       <div className="form-row">
          <div className="form-group  col-md-4">
              <DidLayout didUrl={props.didUrl}
            did={props.did} address={props.address}/> 
           </div>  
           <div className="form-group  col-md-8">
             <ResolveLayout 
            resolveUrl={props.resolveUrl}  resolve={props.resolve}/> 
           </div>  
       </div>   
  
    </div>
  )
}

export default IdentityLayout;
