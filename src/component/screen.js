import React from "react";
import './screen.css'
const Screen=(props)=>{
    return (
        <div className={`screen ${props.th?'t1':'t2'}`}>
            {props.data.map((item,index)=><React.Fragment>{item}</React.Fragment>)}
        </div>
    );
}
export default Screen;