import React, { useEffect } from 'react'

export default function ChildCount() {

    useEffect(()=>{
        console.log("mount");
        return ()=> {console.log("Unmount");}
    })

  return (
    <div>ChildCount</div>
  )
}
