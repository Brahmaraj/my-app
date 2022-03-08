import React, {Component} from "react";
import UpdatedComponent from "./UpdatedComponent";

export class HoverComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    HandleHover = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    render(){

        

        return(
            <h2 onMouseOver={this.props.func}>
                This is Hover {this.props.count}
            </h2>
        )
    }
}

export default UpdatedComponent(HoverComponent);