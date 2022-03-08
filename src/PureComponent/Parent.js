import React, {Component} from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {name:"Brahma"};
    };

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Brahma"});
        },5000)
    }

    render(){
        console.log("parent");
        return(
            <div>
                Parent
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parent;