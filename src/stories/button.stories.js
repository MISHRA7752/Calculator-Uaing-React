import React from "react";
import Butn from '../component/button';
export default{
    title:"Button",
    component:Butn,
}
function handleClick(){
    console.log('on click');
}
const Temp=args=><Butn{...args}/>
export const key = Temp.bind({});
key.args={
    cname:'special t1',
    btnname:'7',
    backgroundColor:``,
    btnsize:'',
    color:'',
    handleClick:handleClick,
}