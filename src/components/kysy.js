import React from 'react';
import ReactDOM from 'react-dom';

const kysy = {
  display: function(){
    const Kysy_display = function(){
      return (
        <div>
        <p>Kysy</p>
        </div>
      )
    }
  ReactDOM.render(<Kysy_display />, document.getElementById('root2'))
}
}

export default kysy;
