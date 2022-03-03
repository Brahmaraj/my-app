import React, {useState} from "react"

const HooksArray = () => {
    const [items, setItems] = useState( [] );

    const addItem = () => {
        setItems([...items, {id:items.length, value:"brahma"}])
    }

    return(
        <div>
            <button onClick={addItem}>ADD item</button>
            <ul>
            {items.map((item)=>{
                return (<li key={item.id}>{item.id} {item.value}</li>)
            })}
            </ul>
            
        </div>
    )
}

export default HooksArray