import React from 'react';
import ReactDOM from 'react-dom';

const viestit = {
  display: function(){
      const Viestit_display = function(){
        return(
          <div>
          <p>Viestit</p>
          </div>
        );
      };
  ReactDOM.render(<Viestit_display />, document.getElementById('root2'))
  }
};


export default viestit;
