import React from "react";
import Keys from "../component/keyss";
export default{
    title:"Keyboard",
    component:Keys,
}
function handleClick(){
    console.log('Key click')
}
const Temp =args=> <Keys{...args}/>
export const Key = Temp.bind({});
Key.args={
    properties:{
        keyfont:'xx-large',
        keysize:'60px',
        screenfont:'xx-large',
        screenw:'238px',
        scolor:''
    },
    te:false,
    fun:handleClick
}