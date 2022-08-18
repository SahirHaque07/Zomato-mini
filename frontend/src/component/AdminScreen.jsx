import React, { useState } from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap"



const AdminScreen = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <Container>
            <div className="container-fluid mt-3">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <a className="navbar-brand text-primary mr-0">Admin Portal</a>
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <i className="fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Managements</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                               <li  className="sd-link"><Link to="/admin/orders"className="sd-link">Orders </Link></li>
                               <li  className="sd-link"><Link to="/admin/users"className="sd-link">Users </Link></li>
                               <li  className="sd-link"><Link to="/admin/addproducts"className="sd-link">Add Items </Link></li>
                               <li  className="sd-link"><Link to="/admin/products"className="sd-link">All products </Link></li>
                            
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
           </Container>
    )
}


export default AdminScreen;