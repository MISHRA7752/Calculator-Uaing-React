import React from "react";
import Screen from "../component/screen";
export default{
    title:"Screen",
    component:Screen,
}
const Temp=args=><Screen{...args}/>
export const Scr = Temp.bind({});
Scr.args={
    data:['0'],
    th:true,
    screenw:'238px',
    scolor:'',
    stcolor:'',
}