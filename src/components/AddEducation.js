import React, { Component } from 'react';

import TextFieldGroup from '../components/shared/TextFieldGroup';
import TextAreaFieldGroup from '../components/shared/TextAreaFieldGroup';
import DateFieldGroup from '../components/shared/DateFieldGroup';
import CheckBoxGroup from '../components/shared/CheckBoxGroup';

import {apiUrl} from '../../src/config';
import axios from "axios";

import moment from 'moment';

import {Link} from 'react-router-dom';

export default class AddEducation extends Component {
constructor(props){
    super(props);
    this.state={
        school:"",
        degree:"",
        fieldofstudy:"",
        description:"",
        from:"",
        to:"",
        current:"",
        previous:"",
        errors:{}
        
    };
    this.onChange = this.onChange.bind(this);
    this.onClick=this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  console.log(e.target.value);
  this.checkValidations(e.target);
    this.setState({ [e.target.name]: e.target.value });
    
  }

onClick(e){
  this.setState({[e.target.name]: [e.target.checked]});
 // this.checkValidations(e.target);
      console.log(e.target.id);
}
onSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    const userData = {
      school:this.state.school,
      degree:this.state.degree,
      fieldofstudy:this.state.fieldofstudy,
      from:this.state.from,
      to:this.state.to,
      current:this.state.current,
      description:this.state.description

      //previous:this.state.previous
  };

  console.log(userData);
  let addEducationUrl = `${apiUrl.baseUrl}${apiUrl.education}`;
  let token = localStorage.getItem('jwtToken');
  axios
    .post(addEducationUrl, userData,{headers:{'Authorization' : token}}) //authorisation is the key word across all the technology to send authorisation token
    .then(res => {
      console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
 }

checkValidations(control){
  switch(control.name){
    case "school":
      if(control.value == null || control.value==""){
        this.setState({
          errors: { [control.name]: "school is a required field" }
        });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
      }
    break;
    case "degree":
      if(control.value == null || control.value == ""){
          this.setState({
            errors : {[control.name]: "Degree is a required field"}
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
      const {errors} = this.state;
      const {school,degree} = this.state;
      const enabled = school.length > 0 && degree.length > 0;

        return (
            <div>
                 
   <div class="add-education"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-8 m-auto"> 
           {/* <a href="dashboard.html" class="btn btn-light"> 
             Go Back 
           </a>  */}
           <Link class="btn btn-light" to="/dashboard">Go Back</Link>
           <h1 class="display-4 text-center">Add Your Education</h1> 
           <p class="lead text-center">Add any school, bootcamp, etc that you have attended</p> 
           <small class="d-block pb-3">* = required field</small> 
           <form action="login.html" onSubmit={this.onSubmit}> 
           <TextFieldGroup
                name="school"
                type="text"
                placeholder="* School Or Bootcamp"
                value={this.state.school}
                onChange={this.onChange}
                error={errors.school}
                />

            <TextFieldGroup
                name="degree"
                type="text"
                placeholder="* Degree Or Certificate"
                value={this.state.degree}
                onChange={this.onChange}
                error={errors.degree}
                />

            <TextFieldGroup
                name="fieldofstudy"
                type="text"
                placeholder="Field Of Study"
                value={this.state.fieldofstudy}
                onChange={this.onChange}
                />



              
              
            <DateFieldGroup
                info="From Date"
                type="date"
                name="from"
                value={this.state.from}
                onChange={this.onChange}
               // minDate = {moment().format("MM-DD-YYYY")}
            />

            <DateFieldGroup
                info="To Date"
                type="date"
                name="to"
                value={this.state.to}
                onChange={this.onChange}
                // minDate = {moment().format("MM-DD-YYYY")}
            />
              

            <CheckBoxGroup
                type="checkbox"
                name="current"
                value={this.state.name}
                id="current"
                labelInfo="Current Job"
                onClick={this.onClick}
            />

          <CheckBoxGroup
                type="checkbox"
                name="previous"
                value={this.state.name}
                id="previous"
                labelInfo="Previous Job"
                onClick={this.onClick}
            />
             

             <TextAreaFieldGroup
               placeholder = "Program Description"
               name = "description"
               value = {this.state.description}
               onChange={this.onChange}
               info = "Tell us about your experience and what you learned"
            />
  
             
             <input type="submit" class="btn btn-info btn-block mt-4" 
                disabled={!enabled}/> 
           </form> 
         </div> 
       </div> 
     </div> 
   </div> 

            </div>
        )
    }
}
