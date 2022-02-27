import React, {Component} from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export class Products extends Component{

    handleToggle = (isActive) =>{
        return {
                        backgroundColor: isActive? 'green' : 'black',
                        color: isActive? 'black':'white',
                        fontSize: isActive? '20px':'15px'
                    }
    }

    render(){
        return(
            <div style={ {textAlign:"center"} }>
                <h1>This is Product Page</h1>
                <h2>Mobiles and Laptops can be searched by button click</h2>
                <NavLink to="mobile" style={({isActive})=> this.handleToggle(isActive)} className="btn btn-primary">Mobile</NavLink>
            
                <NavLink to="laptop" className="btn btn-primary" style={
                    ({isActive}) => this.handleToggle(isActive)} >Laptop</NavLink>
                <div style={{margin:"30px 0 0 40%"}}>
                    <Outlet />
                </div>
            </div>
        )
    }
}