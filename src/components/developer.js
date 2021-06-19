import React from 'react';
import './developer.css';
/*
1. Linkedin
2. Github
3. Instagram
4. Twitter
5. mail


*/
let st=true;
const Developer=()=>{
    const VisiblityHandler=()=>{
        const divId=document.querySelector('#devc');
       if(st)
       {
           divId.style.display='block';
           st=!st;
       }
       else
       {
           divId.style.display='none';
           st=!st;
       }
    }
    return(<>
        <div id='devc' className='container-dev'>
        <div className='link-dev'><a href='hdhj'>Twitter</a></div>
        <div className='link-dev'><a href='hdhj'>Github</a></div>
        <div className='link-dev'><a href='hdhj'>Linkedin</a></div>
        <div className='link-dev'><a href='hdhj'>Instagram</a></div>
        <div className='link-dev'><a href='hdhj'>Email</a></div>
        </div>
        <div><button onClick={VisiblityHandler}>click</button></div></>
    );
}

export default Developer