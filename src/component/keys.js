import React from "react";
import './keys.css'

const Keys=(props)=>{
    const clickhandler=(e)=>{
        const s=e.target.textContent; 
        props.fun(s);
    }
    
    return (        
          <table className="Tableconatiner">
            <tbody>
            <tr>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>AC</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>(-)</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>%</button></td>
                <td><button className={`special ${props.te?'t1':'t2'}`} onClick={clickhandler} >/</button></td>
            </tr>
            <tr>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>7</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>8</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>9</button></td>
                <td><button className={`special ${props.te?'t1':'t2'}`} onClick={clickhandler}>*</button></td>
            </tr>
            <tr>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>4</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>5</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`}onClick={clickhandler}>6</button></td>
                <td><button className={`special ${props.te?'t1':'t2'}`}onClick={clickhandler}>-</button></td>
            </tr>
            <tr>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>1</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>2</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>3</button></td>
                <td><button className={`special ${props.te?'t1':'t2'}`} onClick={clickhandler}>+</button></td>
            </tr>
            <tr>
                <td colSpan={'2'}><button className={`normal ${props.te?'t1':'t2'}`} style={{'width':'124px'}} onClick={clickhandler}>0</button></td>
                <td><button className={`normal ${props.te?'t1':'t2'}`} onClick={clickhandler}>.</button></td>
                <td><button className={`special ${props.te?'t1':'t2'}`} onClick={clickhandler}>=</button></td>
            </tr>
            </tbody>
            </table>       

    );
}
export default Keys;