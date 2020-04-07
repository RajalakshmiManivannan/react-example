import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Landing extends Component {
constructor(props){
    super(props);
}



    render() {
        return (
            <div>
                <div class="landing"> 
     <div class="dark-overlay landing-inner text-light"> 
       <div class="container"> 
         <div class="row"> 
           <div class="col-md-12 text-center"> 
             <h1 class="display-3 mb-4">Developer Connector 
             </h1> 
             <p class="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p> 
             <hr /> 
             {/* <a href="register.html" class="btn btn-lg btn-info mr-2">Sign Up</a> 
             <a href="login.html" class="btn btn-lg btn-light">Login</a>  */}

          <Link className="btn btn-lg btn-info mr-2" to="/register">Sign Up </Link>
            <Link className="btn btn-lg btn-light" to="/login">Login</Link>
           </div> 
         </div> 
       </div> 
     </div> 
   </div> 
 
            </div>
        )
    }
}

 
