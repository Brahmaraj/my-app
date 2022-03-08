import React, {Component} from "react";

class RegularComponent extends Component{
    constructor(props){
        super(props)
        this.state = {};
    }
    render(){
        console.log("regular");
        return(
            <div>Regular Comp {this.props.name}</div>
        )
    }
}

export default RegularComponent;