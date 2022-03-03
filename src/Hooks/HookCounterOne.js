import React, { useEffect, useState } from "react"
import ChildCount from "./ChildCount";
const HookCounterOne = () => {

    // const [count, setCount] = useState(0);
    // const [name, setName] = useState();

    const [toggle, setToggle] = useState(false);



    // useEffect(
    //     ()=>{
    //         console.log("Button is called");
    //         document.title = `Clicked ${count} Times`
    //     },[count]
    // )

    // useEffect(
    //     ()=>{
    //         console.log("Name is called");
    //     },[name]
    // )

    // useEffect(
    //     () => {
    //         alert("welcome to my page")
    //     },[]
    // )

        // useEffect(
        //     ()=>{
        //         console.log("mount")
        //     return ()=>{console.log("unmount")};
        //     }
        // )

    return(
        <>
        {/* <input type="text" value={name} 
        onChange={(event)=>{
            setName(event.target.value)
        }}
        ></input>
        <button onClick={
                    ()=>(setCount(count+1))
                }>
                    Button {count}
                </button> */}
        {toggle?<ChildCount />:""}

        <button onClick={()=>{
            setToggle(!toggle)
        }}>Change</button>
        </>

    )
}

export default HookCounterOne