import React, {Component} from "react";

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component {

        constructor(props){
            super(props);
            this.state = {
                count:0
            }
        }

        HandleClick = () => {
            this.setState({count:this.state.count+1})
        }

        render(){
            return(
                <OriginalComponent count = {this.state.count} func = {this.HandleClick} />
            )
        }
    }
    return NewComponent;
}

export default UpdatedComponent;