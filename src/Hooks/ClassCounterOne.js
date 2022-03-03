import React, {Component} from "react";

class ClassCounterOne extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount (){
        document.title = `Clicked ${this.state.count}`
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.count}`
    }

    render(){
        return(
            <>
            <div>
                ClassCounterOne
                <button onClick={
                    ()=>this.setState({
                        count:this.state.count+1
                    })
                }>
                    Button {this.state.count}
                </button>
            </div>
            </>
        )
    }
}

export default ClassCounterOne