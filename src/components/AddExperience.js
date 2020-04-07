import React, { Component } from 'react'

import TextFieldGroup from '../components/shared/TextFieldGroup';
import DateFieldGroup from '../components/shared/DateFieldGroup';
import CheckBoxGroup from '../components/shared/CheckBoxGroup';
import TextAreaFieldGroup from '../components/shared/TextAreaFieldGroup';

import {apiUrl} from '../../src/config';
import axios from "axios";
import {Link} from "react-router-dom";

export default class AddExperience extends Component {
constructor(props){
    super(props);

    this.state={
        title:"",
        errors:{},
        company:"",
        location:"",
        from:"",
        to:"",
        current:"",
        description:""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick= this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.checkValidations(e.target);
    this.setState({ [e.target.name]: e.target.value });
    
  }

onClick(e){
  this.setState({[e.target.name]: [e.target.checked]});
      console.log(e.target.id);
}
onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    const userData = {
        title:this.state.title,
        company:this.state.company,
        location:this.state.location,
        from:this.state.from,
        to:this.state.to,
        current:this.state.current,
        description:this.state.description
    };

    let addExperienceUrl = `${apiUrl.baseUrl}${apiUrl.experience}`;
    let token = localStorage.getItem('jwtToken');
    axios
      .post(addExperienceUrl, userData,{headers:{'Authorization' : token}}) //authorisation is the key word across all the technology to send authorisation token
      .then(res => {
        console.log("success");
      })
      .catch(err => {
        console.log(err);
      });
 }

 checkValidations(control){
  switch(control.name){
    case "title":
      if(control.value == null || control.value==""){
        this.setState({
          errors: { [control.name]: "title is a required field" }
        });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
      }
    break;
    case "company":
      if(control.value == null || control.value == ""){
          this.setState({
            errors : {[control.name]: "Company is a required field"}
          });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
      }
    break;
    default:
      break;
  }
}



    render() {
        const {errors} = this.state;//same as the above line..this is called object destructuring
        const {title,company} = this.state;
        const enabled = title.length > 0 && company.length > 0;



        return (
            <div>
                     <div class="section add-experience"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-8 m-auto"> 
         <Link class="btn btn-light" to="/dashboard">Go Back</Link>
 
           <h1 class="display-4 text-center">Add Your Experience</h1> 
           <p class="lead text-center">Add any developer/programming positions that you have had in the past</p> 
           <small class="d-block pb-3">* = required field</small> 
           <form action="add-education.html" onSubmit={this.onSubmit}> 
             
             <TextFieldGroup
                name="title"
                type="text"
                placeholder="* Job Title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
             />
             
              
             <TextFieldGroup
                name="company"
                type="text"
                placeholder="* Company"
                value={this.state.company}
                onChange={this.onChange}
                error={errors.company}
             />

             
             <TextFieldGroup
                name="location"
                type="text"
                placeholder="Location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
             /> 
             

             <DateFieldGroup
                info="From Date"
                type="date"
                name="from"
                value={this.state.from}
                onChange={this.onChange}
            /> 
              <DateFieldGroup
                info="To Date"
                type="date"
                name="to"
                value={this.state.to}
                onChange={this.onChange}
            /> 
            
             <CheckBoxGroup
                type="checkbox"
                name="current"
                value={this.state.name}
                id="current"
                labelInfo="Current Job"
                onClick={this.onClick}
            />

             <TextAreaFieldGroup
               placeholder = "Job Description"
               name = "description"
               value = {this.state.description}
               onChange={this.onChange}
               info = "Some of your responsabilities, etc.."
            />
   
             <input type="submit" class="btn btn-info btn-block mt-4" disabled={!enabled} /> 
           </form> 
         </div> 
       </div> 
     </div> 
   </div> 

            </div>
        )
    }
}
