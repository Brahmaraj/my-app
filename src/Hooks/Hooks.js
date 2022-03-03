import React, { useState } from "react";

const Hooks = () => {

    const [count, setCount] =  useState(0);
    const [name, setName] = useState({firstName: '', lastName: ''});

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () =>{
        setCount(count-1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>increase</button>
            <button onClick={decreaseCount}>decrease</button>
            <div>{JSON.stringify(name)}</div>
            <form>
                <input type="text" value={name.firstName} onChange={(event)=>setName({...name,firstName:event.target.value})} ></input>
                <input type="text" value={name.lastName} onChange={(event)=>setName({...name,lastName:event.target.value})} ></input>
            </form>

        </div>
    )
}

export default Hooks