import React, {Component} from "react";

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }

    onChangeHandler = (event) => {
        console.log(event);
        this.setState({
            name:event.target.value.toUpperCase()
        })
    }

    render(){
        return(
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.onChangeHandler} ></input>
                    </label>
                </div>
            </form>
        )
    }
}

export default Form