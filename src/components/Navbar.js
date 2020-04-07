import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
             <div class="container">
             {/* <Link class="navbar-brand" href="landing.html">DevConnector</Link> --add while using routing*/}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                 <span class="navbar-toggler-icon"></span>
                </button>

  <div class="collapse navbar-collapse" id="mobile-nav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="profiles.html"> Developers
        </a>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      {/* <li class="nav-item">
        <a class="nav-link" href="register.html">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Login</a>
      </li> */}


      <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
<Link className="nav-link" to="/register">
            Sign Up
          </Link>
 <Link className="nav-link" to="/profiles">
                    {" "}
                    Developers
                  </Link>
<Link className="nav-link" to="/login">
            Login
          </Link>

    </ul>
  </div>
</div>
</nav> 
            </div>
        )
    }
}
