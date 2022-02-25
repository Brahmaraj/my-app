import React, {Component} from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export class Products extends Component{
    render(){
        return(
            <div style={ {textAlign:"center"} }>
                <h1>This is Product Page</h1>
                <h2>Mobiles and Laptops can be searched by button click</h2>
                <Link to="mobile"  className="btn btn-info">Mobile</Link>
                <Link to="laptop" className="btn btn-info">Laptop</Link>
                <Outlet />
            </div>
        )
    }
}