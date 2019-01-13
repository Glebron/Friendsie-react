import React from 'react';
import ReactDOM from 'react-dom';



const single_kaveri = (properties) => {
  return (
<div className="single-kaveri">
  <span>{properties.name}</span>
  <img src= {properties.profile} alt=""></img> 
</div>
  );
};


export default single_kaveri;



