import React from "react";
import Tweet from "./static-tweet/index";

    const tweetData1 = {
        name:'firstName',
        message:'This is from First Person',
        handle:"@first"
    };

    const tweetData2 = {
        name:'SecondName',
        message:'This is from Second Person',
        handle:"@second"
    };

    const tweetData3 = {
        name:'thirdName',
        message:'This is from Third Person',
        handle:"@third"
    };


const App = () => {

    return (
        <>
        <div>
            <Tweet data={tweetData1}/>
            <Tweet data={tweetData2}/>
            <Tweet data={tweetData3}/>
        </div>
        </>
    );
};

export default App;