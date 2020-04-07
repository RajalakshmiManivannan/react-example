import React, { Component } from 'react'

import InputGroup from '../shared/InputGroup';

import TextAreaFieldGroup from '../shared/TextAreaFieldGroup';
import SelectListGroup from '../shared/SelectListGroup';
import TextFieldGroup from '../shared/TextFieldGroup';

import {apiUrl} from '../../../src/config';
import axios from "axios";


export default class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {},
      //isDisabled:true
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  
  onChange(e) {
    this.checkValidations(e.target);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    
    /*const userData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.website,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    let createProfileUrl = `${apiUrl.baseUrl}${apiUrl.createprofile}`;
    let token = localStorage.getItem('jwtToken');
    axios
      .post(createProfileUrl, userData,{headers:{'Authorization' : token}}) //authorisation is the key word across all the technology to send authorisation token
      .then(res => {
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });*/

 }

 checkValidations(control) {
  //debugger;
  
  switch (control.name) {
    case "handle":
      if (control.value == null || control.value == "") {
        this.setState({
          errors: { [control.name]: "handle is a required field" },
          //isDisabled : true
        });
      } else {
        this.setState({
          errors: { [control.name]: undefined },
          //isDisabled : false
          
        });
      }
      break;
    case "skills":
      if (control.value == null || control.value == "") {
        this.setState({
          errors: { [control.name]: "Skill is a required field" },
          //isDisabled : true
        
        });
      } else {
        this.setState({
          errors: { [control.name]: undefined },
          //isDisabled : false
        });
    }
      break;
    case "status":
      if (control.value == 0 || control.value == "") {
        this.setState({
          errors: { [control.name]: "Status is a required field" },
          //isDisabled : true
        });
      } else {
        this.setState({
          errors: { [control.name]: undefined },
          //isDisabled : false
         
        });
      }
      break;

    default:
      break;
  }
}



    render() {

      //const  errors  = this.state.errors;
      const {errors} = this.state;//same as the above line..this is called object destructuring
      // const {handle,status,skills} = this.state;
      // const enabled = handle.length > 0 && status != "" && skills.length > 0;


      const options = [
        { label: "* Select Professional Status", value: 0 },
        { label: "Developer", value: "Developer" },
        { label: "Junior Developer", value: "Junior Developer" },
        { label: "Senior Developer", value: "Senior Developer" },
        { label: "Manager", value: "Manager" },
        { label: "Student or Learning", value: "Student or Learning" },
        { label: "Instructor or Teacher", value: "Instructor or Teacher" },
        { label: "Intern", value: "Intern" },
        { label: "Other", value: "Other" }
      ];

      let socialInputs=(
        <div>
           <InputGroup
               placeholder="Twitter Profile URL"
               name="twitter"
               icon="fab fa-twitter"
               value={this.state.twitter}
               onChange={this.onChange}
               error={errors.twitter}
          />



             <InputGroup
               placeholder="Facebook Profile URL"
               name="facebook"
               icon="fab fa-facebook"
               value={this.state.facebook}
               onChange={this.onChange}
               error={errors.facebook}
             />


         
         <InputGroup
               placeholder="Linkedin Profile URL"
               name = "linkedin" //{a}it should accept only sting
               icon="fab fa-linkedin"
               value={this.state.linkedin}
               onChange={this.onChange}
               error={errors.linkedin}
             />


         <InputGroup
               placeholder="Youtube Profile URL"
               name = "youtube"
               icon="fab fa-youtube"
               value={this.state.youtube}
               onChange={this.onChange}
               error={errors.youtube}
             /> 


         <InputGroup
               placeholder="Instagram Profile URL"
               name = "instagram"
               icon="fab fa-instagram"
               value={this.state.instagram}
               onChange={this.onChange}
               error={errors.instagram}
             />
</div>
);




        return (
            <div>
                <div class="create-profile"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-8 m-auto"> 
           <a href="dashboard.html" class="btn btn-light"> 
             Go Back 
           </a> 
           <h1 class="display-4 text-center">Create Your Profile</h1> 
           <p class="lead text-center">Let's get some information to make your profile stand out</p> 
           <small class="d-block pb-3">* = required field</small> 
           <form action="add-experience.html" onSubmit={this.onSubmit} > 
             
            <TextFieldGroup
              name="handle"
              type="text"
              placeholder="* Profile Handle"
              value={this.state.handle}
              onChange={this.onChange}
              info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
              error={errors.handle}
            />

           <SelectListGroup
                name='status'
                value={this.state.status}
                options={options}
                onChange={this.onChange}
                error={errors.status}
              />

             <TextFieldGroup
              name="company"
              type="text"
              placeholder="company"
              value={this.state.company}
              onChange={this.onChange}
              error={errors.company}
              info=" Could be your own company or one you work for"
              
            />
            
            <TextFieldGroup
              name="website"
              type="text"
              placeholder="Webite"
              value={this.state.website}
              onChange={this.onChange}
              info=" Could be your own or a company website"
              error={errors.website}
            />

            <TextFieldGroup
              name="location"
              type="text"
              placeholder="Location"
              value={this.state.location}
              onChange={this.onChange}
              info="City & state suggested (eg. Boston, MA)"
              error={errors.location}
            />


          <TextFieldGroup
              name="skills"
              type="text"
              placeholder="Skills"
              value={this.state.skills}
              onChange={this.onChange}
              info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
              error={errors.skills}
            />
             
             <TextFieldGroup
              name="githubusername"
              type="text"
              placeholder="Github Username"
              value={this.state.githubusername}
              onChange={this.onChange}
              info="If you want your latest repos and a Github link, include your username"
              error={errors.githubusername}
            />
             
           
             <TextAreaFieldGroup
               placeholder = "A short bio of yourself"
               name = "bio"
               value = {this.state.bio}
               onChange={this.onChange}
               info = "Tell us a little about yourself"
               error={errors.bio}
            />
 
 
             <div class="mb-3"> 
               <button type="button" class="btn btn-light">Add Social Network Links</button> 
               <span class="text-muted">Optional</span> 
             </div> 
          
          {/* {socialInputs} */}
              


             <input type="submit" class="btn btn-info btn-block mt-4" />
             {/* disabled ={!enabled}  */}
           </form> 
         </div> 
       </div> 
     </div> 
   </div> 

            </div>
        )
    }
}
