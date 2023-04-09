import React from 'react';
import styled from 'styled-components';

import './keys.css';

// export interface butP{
//     backgroundColor:string;
//     handleClick:(e:any)=>void;
//     gridColumn?:string;
//     cname:string;
//     color?:string;
//     btnsize?:string;
//     btnname:string;
// }

const Butn=(props)=>{
    const {}=props;
    const handleClick=(e)=>{
        props.handleClick(e);
    }
    return <React.Fragment>
        {props.gridColumn=='1/3' && <button onClick={handleClick} className={props.cname} style={{gridColumn:`${props.gridColumn}`, backgroundColor:`${props.backgroundColor}`,color:`${props.color}`,width:`${props.btnsize=='large'?'7.5rem':''}`}}>{props.btnname}</button>}
        {props.gridColumn!='1/3' && <button onClick={handleClick} className={props.cname} style={{backgroundColor:`${props.backgroundColor}`,color:`${props.color}`,width:`${props.btnsize=='large'?'7.5rem':''}`}}>{props.btnname}</button>}
    </React.Fragment>
}
export default Butn;