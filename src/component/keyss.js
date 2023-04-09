import React from "react";
import './keys.css'
import Butn from './button';
// export interface keyP{
//     backgroundColor:string;
//     fun:(...args:any) => any;
//     cname:string;
//     Color:string;
//     btnname:string;
//     properties:any;
//     btnsize:string;
//     te:boolean;
    
// }

const Keys=(props)=>{
    const handleClick=(e)=>{
        /* eslint-disable */ 
        const s=e.target.textContent; 
        props.fun(s);
    }
    const btns=[
        {
            name:'AC',
            cname:`normal top ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,   
                color:`${props.properties.btntcolor}`,                
            }  
        },
        {
            name:'(-)',
            cname:`normal top ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'%',
            cname:`normal top ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  

            }  
        },
        {
            name:'/',
            cname:`special ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
            
        },
        {
            name:'7',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'8',
            cname:`normal ${props.te?'t1':'t2'}`,

            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  

        },
        {
            name:'9',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  

            }  
            
        },
        {
            name:'*',
            cname:`special ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'4',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'5',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'6',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'-',
            cname:`special ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'1',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'2',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'3',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'+',
            cname:`special ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
            
        },
        {
            name:'0',
            cname:`normal ${props.te?'t1':'t2'}` ,
            style:{
                gridColumn:'1/3'                ,
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                color:  `${props.properties.btntcolor}`,  
            }           
        },
        {
            name:'.',
            cname:`normal ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
        {
            name:'=',
            cname:`special ${props.te?'t1':'t2'}`,
            style:{            
                fontSize:`${props.properties.keyfont}`,
                backgroundColor:`${props.properties.btnclr}`,
                btnsize:`${props.properties.btnsize}`,
                color:  `${props.properties.btntcolor}`,  
            }  
        },
    ]
    
    return (
            <div style={{display: 'grid',gridTemplateRows:`${props.properties.keysize} ${props.properties.keysize} ${props.properties.keysize} ${props.properties.keysize} ${props.properties.keysize}`,gridTemplateColumns:`${props.properties.keysize} ${props.properties.keysize} ${props.properties.keysize} ${props.properties.keysize}`}}>  
                {btns.map((item,index)=>{return <Butn  key={index} handleClick={handleClick} cname={item.cname} backgroundColor={item.style.backgroundColor} gridColumn={item.style.gridColumn} btnsize={item.style.btnsize} color={item.style.color} btnname={item.name}/>                
                })}              
            </div>
    );
}
export default Keys;