import React, { useState } from 'react';
import Screen from './component/screen';
import './App.css';
import Keys from './component/keys';
import Theme from './component/theme';
 const App=()=> {
  const [the,setthe]=useState(false)
  function themechangehandler(){
    setthe(prev=>{
      return !prev;
    })
  }
  const [data,setdata]=useState(['0']); 
  const clickeventhandler=(btn)=>{  
    if(btn==='AC'){
      setdata(['0'])
      return
    }
    if(btn==='='){
      setdata(prev=>{
        var s='';
        for(var i=0;i<prev.length;i++){
          s=s+prev[i];
        }
        try{
          s=eval(s);
          var p=s+'';
          if(p.includes('.')){
            s=s.toFixed('3');
          }

        }
        catch(err){
          return [...prev];
        }
        if(isNaN(s)){
          return [...prev]
        }
        return [s];
      })
    }
    else{
      setdata(prev=>{
        let v=prev;       
          if(btn==='(-)'){
            if(v[v.length-1]==''){
              return [...v];
            }
            var last=v[v.length-1];
            v.pop();
            var lastn=-1*eval(last);
            if(lastn<0){
              lastn='('+lastn+')';
            }
            else{
              lastn=lastn+''
            }            
            return [...v,lastn];
          }
          if((btn<='9' && btn>='0')|| btn==='.'){
            let t=prev[prev.length-1];
            let lastele= t[t.length-1]; 
            if(prev.length===1 && prev[0]=='0'){
              return [btn];
            }
            else {
              if(btn==='.'){
                if(t.includes('.')){
                  return [...v];
                }
              }              
              t=t+btn;
              v.pop();
              return[...v,t];                            
            }            
          }
          if(prev[prev.length-1]===''){
            v[prev.length-2]=btn;
            return [...v]
          }
          return [...prev,btn,''];
        
      })
    }  

  }
    return (
      <div>
        <Theme fun={themechangehandler}/>
        <Screen data={data} th={the}/>
        <Keys fun={clickeventhandler} te={the}/>
      </div>

    );
  }
export default App;
