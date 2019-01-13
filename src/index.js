import React from 'react';
import ReactDOM from 'react-dom';

import kaverit from './components/kaverit';
import viestit from './components/viestit';
import kysy from './components/kysy';
import AppHeader from './components/app-header';



const App = () => {
  
  return (
    <div>
      <AppHeader />
    </div>
  );
}


const appContent = viestit.display();



ReactDOM.render(<App />, document.getElementById('root'))
