import React from "react";

const Author = (props) => {
    
    console.log(props);

        return (
            <span className="author">
                <span className="name">{props.name}</span>
                <span className="handle">{props.handle}</span>
            </span>
        )
    
}

export default Author;