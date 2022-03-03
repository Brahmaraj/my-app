import React from "react";
import "./index.css";
import Avatar from "./Avatar";
import Author from "./Author";
import { Message as Msg } from "./Message";
import Time from "./Time";

const Tweet = (props) => {
    console.log(props.data);
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author name={props.data.name} handle={props.data.handle}/> <Time />
                <Msg message={props.data.message}/> 
                
            </div>
        </div>
    );
};

export default Tweet;