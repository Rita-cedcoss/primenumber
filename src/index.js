import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
//prime number program
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
reportWebVitals();
// sorting array program 
 const citesArr=["Lucknow" ,"Kanpur" ,"Jaipur","Delhi","Mumbai","Barelly","Bundelkhand"];
  var arrData=citesArr.sort();
  console.log(arrData); 
  root.render(
    <div><p>For prime number</p>{arr.map(item=>
    <p>{item}</p>  
    )}
    <p>sorting Array</p>
    {arrData.map(cityitem=><li>{cityitem}</li>)}
    <p>start With B element</p>
   <p>{citesArr.filter(belementFind).map(items=><li>{items}</li>)}</p>

    </div>  
 );
//find B element
function belementFind(strB) {
  return strB.startsWith("B");
}