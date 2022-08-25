import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const arr=[];
 const primeNumber=()=>
 {
    for(var i=1;i<100;i++)
    {
      var flag=0;
      for(var j=2;j<=i/2;j++)
      {
       if(i%j===0)
       {
        flag=1;
        break;
       }
      }
      if(flag===0)
      {
        arr.push(i); 
      }
    }
 }
primeNumber();
root.render(
   <div>{arr.map(item=>
   <p>{item}</p>  
   )}</div>
);
reportWebVitals();
