import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "./nav.css";

function NavBar() {
    const {user,logout}=useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" >
        <a className="navbar-brand fs-2" href="/" id='nb'>
            &nbsp;
            <img src="/Letters/logo.png" className="rounded-circle" width="50" height="50" alt="logo" />
            &nbsp; Language Learning Platform
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav" id="nb-f">
                <a className="nav-item nav-link active fs-5" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active fs-5" href="/">About</a>
                <a className="nav-item nav-link active fs-5" href="/course">Languages</a>
                <a className="nav-item nav-link active fs-5" href="/">Contact Us</a>
                {user ? (
                    <button onClick={logout} className="btn btn-outline-light mx-3 my-2 my-sm-0 fs-5">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-outline-light mx-3 my-2 my-sm-0 fs-5">Login</Link>
                )}            </div>
                        
        </div>
    </nav>
  )
}

export default NavBar
