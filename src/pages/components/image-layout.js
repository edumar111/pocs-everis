import React from 'react';

import './image-layout.css';

function ImageLayout(props) {
  return (
    <div className="ImageLayout">
        
          <h3> {props.message}</h3>
          <img alt="" src={props.image}/>
   
    </div>
  )
}

export default ImageLayout;
