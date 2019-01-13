import React from 'react';
import ReactDOM from 'react-dom';

import SingleKaveri from './single-kaveri'

const kaverit = {
  display: function(){
      const Kaverit_display = function(){
        return(
          
          <div>
          <p>Kaverit</p>
          </div>
        );
      };
  ReactDOM.render(<Kaverit_display />, document.getElementById('root2'))
  }
};

export default kaverit;
