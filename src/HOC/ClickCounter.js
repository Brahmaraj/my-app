import React, {Component} from "react";
import UpdatedComponent from "./UpdatedComponent";

class ClickCounter extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count:0
    //     };
    // }

    // HandleClick = () => {
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

    render(){
        console.log(this.props);
        const {count, func} = this.props
        console.log(func);
        // console.log(count, HandleClick);
        return(
            <button onClick={func}>Class {count} Times</button>
        )
    }
    
}

export default UpdatedComponent(ClickCounter); 