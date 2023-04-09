import React from "react";
import './theme.css'

function Theme(props){
    /* eslint-disable */ 
    const f=()=>{
        props.fun();      
    }    
    return (
        <div className="Themebox"> 
            <p>Please select your Theme</p>
            <input onChange={f} defaultChecked type="radio" name="Themes" />
            <label for="theme1">Theme 1</label>
            <br/>
            <input onChange={f} type="radio"  name="Themes"/>
            <label for="theme2">Theme 2</label>
        </div>
    );
}
export default Theme;