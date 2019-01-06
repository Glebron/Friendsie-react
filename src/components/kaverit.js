import React from 'react';
import ReactDOM from 'react-dom';

import SingleKaveri from './single-kaveri'

const Kaverit = ({ friends }) => {

  const elements = friends.map((props) => {

    const {id, ... friendsProps} = props;

    return (
      <li key={id} className="list-group">
        <SingleKaveri {...friendsProps}/>
      </li>
    )
  });

  return (
    <ul className="kaverit">
        <h1>Kaverit</h1>
        {elements}
    </ul>
  );
};

export default Kaverit;
