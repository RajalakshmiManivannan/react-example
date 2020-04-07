import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div class="dashboard"> 
     <div class="container"> 
       <div class="row"> 
        <div class="col-md-12"> 
           <h1 class="display-4">Dashboard</h1> 
           <p class="lead text-muted">Welcome John Doe</p> 
           {/* <!-- Dashboard Actions -->  */}
           <div class="btn-group mb-4" role="group"> 
             <a href="edit-profile.html" class="btn btn-light"> 
               <i class="fas fa-user-circle text-info mr-1"></i> Edit Profile</a> 
             
              <Link className="btn btn-light" to="/addexperience"> <i class="fab fa-black-tie text-info mr-1"></i> AddExperience</Link>
              <Link className="btn btn-light" to="/addeducation"> <i class="fas fa-graduation-cap text-info mr-1"></i> AddEducation</Link>
            
           </div> 
 
 
           {/* <!-- Experience -->  */}
           <div> 
             <h4 class="mb-2">Experience Credentials</h4> 
             <table class="table"> 
               <thead> 
                 <tr> 
                   <th>Company</th> 
                   <th>Title</th> 
                   <th>Years</th> 
                   <th /> 
                 </tr> 
               </thead> 
               <tbody> 
                 <tr> 
                   <td>Tech Guy Web Solutions</td> 
                   <td>Senior Developer</td> 
                   <td> 
                     02-03-2009 - 01-02-2014 
                   </td> 
                   <td> 
                     <button class="btn btn-danger"> 
                       Delete 
                     </button> 
                   </td> 
                 </tr> 
                 <tr> 
                   <td>Traversy Media</td> 
                   <td>Instructor & Developer</td> 
                   <td> 
                     02-03-2015 - Now 
                   </td> 
                   <td> 
                     <button class="btn btn-danger"> 
                       Delete 
                     </button> 
                   </td> 
                 </tr> 
               </tbody> 
             </table> 
           </div> 
 
 
           {/* <!-- Education -->  */}
           <div> 
             <h4 class="mb-2">Education Credentials</h4> 
             <table class="table"> 
               <thead> 
                 <tr> 
                   <th>School</th> 
                   <th>Degree</th> 
                   <th>Years</th> 
                   <th /> 
                 </tr> 
               </thead> 
               <tbody> 
                 <tr> 
                   <td>Northern Essex</td> 
                   <td>Associates</td> 
                   <td> 
                     02-03-2007 - 01-02-2009 
                   </td> 
                   <td> 
                     <button class="btn btn-danger"> 
                       Delete 
                     </button> 
                   </td> 
                 </tr> 
               </tbody> 
             </table> 
           </div> 
 
 
           <div> 
             <button class="btn btn-danger"> 
               Delete My Account 
            </button> 
           </div> 
         </div> 
       </div> 
     </div> 
   </div> 

            </div>
        )
    }
}
