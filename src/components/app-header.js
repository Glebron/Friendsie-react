import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app-header.css'
import logoImg from './logo.png';

import kaverit from '../components/kaverit';
import viestit from '../components/viestit';
import kysy from '../components/kysy';
import renderViestit from '../components/viestit';

const AppHeader = () => {

  

  return (
  <div className="app-header">

      <img className='logo' src={logoImg} />

      <div className='menu-buttons'>
        <button onClick={kaverit.display} id='kaverit-button' className='btn'>
        <i className="fa fa-user"></i>
         Kaverit
        </button>


        <button onClick={viestit.display} id='viestit-button' className='btn'>
        <i className="fa fa-envelope"> </i>
         Viestit
        </button>


        <button onClick={kysy.display} id='kysy-button' className='btn'>
        <i className="fa fa-pencil"></i>
         Kysy
        </button>
      </div>
  </div>
  )
}

export default AppHeader;
