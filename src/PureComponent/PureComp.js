import React, {PureComponent} from "react";

class PureComp extends PureComponent{
    render(){
        console.log("This is Pure Comp");
        return (
            <div>Pure Comp : {this.props.name}</div>
        )
    }
}

export default PureComp;