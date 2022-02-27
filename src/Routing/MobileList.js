import React from "react";
import { Link,Outlet } from "react-router-dom";
import "./style.css";

const MobileList = () => {
    return(
        <div>
            <div className="card" style={ {width: '18rem'}}>
                <ul class="list-group">
                    <li className="list-group-item">
                        <Link to="/products/mobile/iphone" className="btn btn-primary">iPhone</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/products/mobile/vivo" className="btn btn-primary">Vivo</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/products/mobile/samsung" className="btn btn-primary">Samsung</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/products/mobile/oneplus" className="btn btn-primary">OnePlus</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/products/mobile/mi" className="btn btn-primary">Redmi</Link>
                    </li>
                </ul>
            </div>
            <div id="outlet_cont">
            <Outlet />
            </div>
            </div>
    )
}

export default MobileList ;