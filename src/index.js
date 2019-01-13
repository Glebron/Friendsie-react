import React from 'react';
import ReactDOM from 'react-dom';

import kaverit from './components/kaverit';
import viestit from './components/viestit';
import kysy from './components/kysy';
import AppHeader from './components/app-header';

const App = () => {
  const kaveriData = [
    {name:'Juho',profile:'../public/pictures/profile.png' ,typeOfQuestion:'Lempi...', typeOfMessage: true},
    {name:'Artur',profile:'../public/pictures/profile1.png',typeOfQuestion:'Kuka...', typeOfMessage: true},
    {name:'Mikka',profile:'../public/pictures/profile2.png',typeOfQuestion:'Kenen...', typeOfMessage: false}
  ];

  return (
    <div>
      <AppHeader />
    </div>
  )
}

const appContent = viestit.display();



ReactDOM.render(<App />, document.getElementById('root'))
