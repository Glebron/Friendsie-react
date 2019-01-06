import React from 'react';
import ReactDOM from 'react-dom';

const SingleKaveri = ({name, typeOfQuestion}) => {
  return (
<div className="single-kaveri">
<span>{name} </span>
<span>{typeOfQuestion}</span>
</div>
  )
}

export default SingleKaveri;
