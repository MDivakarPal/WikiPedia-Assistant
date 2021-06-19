import './App.css';
/*
I am building this app Wiki-pedia personal assistant to search your 
query on wikipedia.
I am using debouncing and throatling technique to control api calls



*/
import React ,{useState} from 'react';
import Developer from './components/developer';
//import Search from './search';
function App() {
  let newArr=[]
  let newLink=[]
  
  const [arr,setArr]=useState(newArr)
  const [link,setLink]=useState(newLink)
   var timer;
  const callApi=(e)=>{
  let str=e.target.value;
  clearTimeout(timer)
  if(str){
   timer=setTimeout( ()=>{
     makeApiCall(str)
     timer=undefined
    
    },500)
  }
  }

  const makeApiCall=(str)=>{
    let wikiApi='https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search='+str
    fetch(wikiApi,{method:'GET'}).then(x=>x.json())
    .then(x=>{
     setArr(x[1]);
     setLink(x[3])
    });
  }

  return (
    <div className="App">
      <div className='container'>
        <h3>Wiki Search assistant</h3>
        <input onChange={callApi} type='text' placeholder='Search your Query'/>
       <center>  <div className='searchResult'>
         {
           arr.length>0 ?arr.map((a,i)=><li className='links' key={i}>
             <a target='blank' href={link[i]}>{a}</a></li>):
           <p>Data Not founnd</p>
         }
         </div></center>
         <b style={{color:'white'}}>Note: All results are from wikipedia</b>
     <h3>Developed By Divakar Pal</h3>
      </div>
      </div>
  );
}

export default App;
