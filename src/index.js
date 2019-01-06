import React from 'react';
import ReactDOM from 'react-dom';

import Kaverit from './components/kaverit';
import Viestit from './components/viestit';
import Kysy from './components/kysy';
import AppHeader from './components/app-header';

const App = () => {

  const kaveriData = [
    {name:'Juho',typeOfQuestion:'Lempi...', typeOfMessage: false, id:0},
    {name:'Artur',typeOfQuestion:'Kuka...', typeOfMessage: false, id:1},
    {name:'Mikka',typeOfQuestion:'Kenen...', typeOfMessage: false, id:2}
  ];

  return (
    <div>
      <AppHeader />
      <Viestit />
      <Kaverit friends={kaveriData}/>
      <Kysy />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
