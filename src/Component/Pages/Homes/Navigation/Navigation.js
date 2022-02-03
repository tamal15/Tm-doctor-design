import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <div>

            {/* start  */}

            <nav className="navbar navbar-expand-lg  navbar-light navess ">
            <div className="container ">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src="https://i.ibb.co/vcZhcY0/logo.png" alt="" width="50" height="49" className="d-inline-block align-text-top "/>
                <span className="ms-3 company">TM</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

{/* doctor */}
                <li className="nav-item dropdown">
 <a className="nav-link dropdown-toggle texts" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                
                 
                 {/* services  */}
                 <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle texts" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                
                 
{/* pharmacy owner */}
<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle texts" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pharmacy Owner
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

                  <li className="nav-item">
                  <Link className="nav" to="/contact">About Us</Link>
                   </li>
                  <li className="nav-item">
                  <Link className="nav" to="/contact">Blog</Link>
                   </li>
                  <li className="nav-item">
                  <Link className="nav" to="/contact">Contact</Link>
                   </li>
                  <li className="nav-item">
                  <Link className="nav" to="/contact">FAQ</Link>
                   </li>

                   {/* EN  */}
                   <li className="nav-item dropdown">
 <a className="nav-link dropdown-toggle texts" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-items">
                  <Link className="nav-log" to="/contact">Login</Link>
                   </li>
                 
                
                </ul>
               
              </div>
            </div>
          </nav>

            {/* end  */}
            
        </div>
    );
};

export default Navigation;