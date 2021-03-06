import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Profile extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                 
{/*    <!-- Profile -->  */}
   <div class="profile"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-12"> 
           <div class="row"> 
             <div class="col-6"> 
               <a href="profiles.html" class="btn btn-light mb-3 float-left">Back To Profiles</a> 
             </div> 
             <div class="col-6"> 
 
 
            </div> 
           </div> 
 
 
           {/* <!-- Profile Header -->  */}
           <div class="row"> 
             <div class="col-md-12"> 
               <div class="card card-body bg-info text-white mb-3"> 
                 <div class="row"> 
                   <div class="col-4 col-md-3 m-auto"> 
                     <img class="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" /> 
                   </div> 
                 </div> 
                 <div class="text-center"> 
                   <h1 class="display-4 text-center">John Doe</h1> 
                   <p class="lead text-center">Developer at Microsoft</p> 
                   <p>Seattle, WA</p> 
                   <p> 
                     <a class="text-white p-2" href="#"> 
                       <i class="fas fa-globe fa-2x"></i> 
                     </a> 
                     <a class="text-white p-2" href="#"> 
                       <i class="fab fa-twitter fa-2x"></i> 
                     </a> 
                     <a class="text-white p-2" href="#"> 
                       <i class="fab fa-facebook fa-2x"></i> 
                     </a> 
                     <a class="text-white p-2" href="#"> 
                       <i class="fab fa-linkedin fa-2x"></i> 
                     </a> 
                     <a class="text-white p-2" href="#"> 
                       <i class="fab fa-instagram fa-2x"></i> 
                     </a> 
                   </p> 
                 </div> 
               </div> 
             </div> 
           </div> 
 
 
           {/* <!-- Profile About -->  */}
           <div class="row"> 
             <div class="col-md-12"> 
               <div class="card card-body bg-light mb-3"> 
                 <h3 class="text-center text-info">John's Bio</h3> 
                 <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fuga cum necessitatibus blanditiis vel, 
                   officia facere porro esse numquam assumenda doloremque saepe aliquam nemo excepturi aliquid maiores! Excepturi, 
                   libero repudiandae. 
                 </p> 
                 <hr /> 
                 <h3 class="text-center text-info">Skill Set</h3> 
                 <div class="row"> 
                   <div class="d-flex flex-wrap justify-content-center align-items-center"> 
                     <div class="p-3"> 
                       <i class="fa fa-check"></i> HTML</div> 
                     <div class="p-3"> 
                       <i class="fa fa-check"></i> CSS</div> 
                     <div class="p-3"> 
                       <i class="fa fa-check"></i> JavaScript</div> 
                     <div class="p-3"> 
                       <i class="fa fa-check"></i> Python</div> 
                     <div class="p-3"> 
                       <i class="fa fa-check"></i> C#</div> 
                   </div> 
                 </div> 
               </div> 
             </div> 
           </div> 
 
 
           {/* <!-- Profile Creds -->  */}
           <div class="row"> 
             <div class="col-md-6"> 
               <h3 class="text-center text-info">Experience</h3> 
               <ul class="list-group"> 
                 <li class="list-group-item"> 
                   <h4>Microsoft</h4> 
                   <p>Oct 2011 - Current</p> 
                   <p> 
                     <strong>Position:</strong> Senior Developer 
                   </p> 
                   <p> 
                     <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta enim 
                     excepturi laborum voluptatem nam provident quisquam facere. Quae?</p> 
                 </li> 
                 <li class="list-group-item"> 
                   <h4>Sun Microsystems</h4> 
                   <p>Oct 2004 - Nov 2011</p> 
                   <p> 
                     <strong>Position: </strong> Systems Admin</p> 
                   <p> 
                     <p> 
                       <strong>Location: </strong> Miami, FL 
                     </p> 
                     <strong>Description: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta 
                     enim excepturi laborum voluptatem nam provident quisquam facere. Quae?</p> 
                 </li> 
               </ul> 
             </div> 
             <div class="col-md-6"> 
               <h3 class="text-center text-info">Education</h3> 
               <ul class="list-group"> 
                 <li class="list-group-item"> 
                   <h4>Univeresity Of Washington</h4> 
                   <p>Sep 1993 - June 1999</p> 
                   <p> 
                     <strong>Degree: </strong>Masters</p> 
                   <p> 
                     <strong>Field Of Study: </strong>Computer Science</p> 
                   <p> 
                     <p> 
                       <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus dicta 
                       enim excepturi laborum voluptatem nam provident quisquam facere. Quae?
                        </p> 
                    </p>
                 </li> 
               </ul> 
             </div> 
           </div> 
 
 
           {/* <!-- Profile Github -->  */}
           <div ref="myRef"> 
             <hr /> 
             <h3 class="mb-4">Latest Github Repos</h3> 
             <div class="card card-body mb-2"> 
               <div class="row"> 
                 <div class="col-md-6"> 
                   <h4> 
                     {/* <Link to={repo.html_url} class="text-info" target="_blank"> Repository One 
                     </Link>  */}
                   </h4> 
                   <p>Repository description</p> 
                 </div> 
                 <div class="col-md-6"> 
                   <span class="badge badge-info mr-1"> 
                     Stars: 44 
                   </span> 
                   <span class="badge badge-secondary mr-1"> 
                     Watchers: 21 
                   </span> 
                   <span class="badge badge-success"> 
                     Forks: 122 
                   </span> 
                 </div> 
               </div> 
             </div> 
           </div> 
         </div> 
       </div> 
     </div> 
   </div> 
   </div> 

            // </div>
        )
    }
}
