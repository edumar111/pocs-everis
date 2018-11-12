import React from 'react';
import ImageLayout from './image-layout'
import './did-layout.css';

function ResolveLayout(props) {
  return (
    <div className="DidLayout">
        
          
          <h3>Resolve</h3>
     
   		 <div className='form-group'>
            <label >Resolve  </label>
            <br/>
            <pre>
			<code>
            {props.resolve}
           </code>
			</pre>
            <ImageLayout image={props.resolveUrl} message='share Resolve'/>
        </div>
   
    </div>
  )
}

export default ResolveLayout;