import React from "react";
import './screen.css'
const Screen=(props)=>{
    /* eslint-disable */ 
    return (
        <div className={`screen ${props.th?'t1':'t2'}`} style={{width:`${props.screenw}`,backgroundColor:`${props.scolor}`,color:`${props.stcolor}`}}>
            {props.data.map((item,index)=><React.Fragment key={index}>{item}</React.Fragment>)}            
        </div>
        
    );
}
export default Screen;