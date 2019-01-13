import React from 'react';
import ReactDOM from 'react-dom';
import SingleKaveri from './single-kaveri'

const kaveriData = [
  {id:'1',name:'Juho',profile:'/pictures/profile.png' ,typeOfQuestion:'Lempi...', typeOfMessage: true},
  {id:'2',name:'Artur',profile:'/pictures/profile1.png',typeOfQuestion:'Kuka...', typeOfMessage: true},
  {id:'10',name:'Mikka',profile:'/pictures/profile2.png',typeOfQuestion:'Kenen...', typeOfMessage: false}
];

const kaverit = {
  display: function(){
      const Kaverit_display = function(){
        
                              const friends= kaveriData.map( function(one_friend){
                                return(          
                                  <li key={one_friend.id}>
                                  <SingleKaveri name = {one_friend.name} profile= {one_friend.profile} />
                                  </li>
                                );
                              });

        return <ul>{friends}</ul>
       
      };
  ReactDOM.render(<Kaverit_display />, document.getElementById('root2'))
  }
};

export default kaverit;
