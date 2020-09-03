import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';


class Header extends Component{
    render(){
        
        let isLoggedIn = AuthenticationService.isLoggedIn();
       
        console.log(isLoggedIn)
        return(
        
          <header>
              <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <Link to="#" className="navbar-brand">Todo</Link>
                      <ul className="navbar-nav">
                        {isLoggedIn && <li><Link className="nav-link" to="/welcome/admin">Home</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/todos"
                        >Todo</Link></li>}
                      </ul>
                      <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                      </ul>
                  
              </nav>
          </header>
        )
    }
}
export default Header