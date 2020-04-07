import React, { Component } from 'react';
import classnames from "classnames";
//import axios from "axios";
import {apiUrl} from '../config';

//The connect() function connects a React component to a Redux store.
import { connect } from "react-redux";
//import axios from "axios";//Now actions will take care of callling the services
import { registerUser } from "../actions/authActions";
import { withRouter } from "react-router-dom";


class SignUp extends Component {
constructor(props){
    super(props);

    this.state = {
      name:"",
      email: "",
      password: "",
      password2:"",
      errors: {},
      disabled:true
    };
     
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
  this.checkValidations(e.target);
  //this.setState({ [e.target.name]: e.target.value });
  this.setState({[e.target.name]: e.target.value}, ()=> {
    this.isFormValid();
});
}


isFormValid(){
  const {name,email,password,password2}=this.state;
  if(name.length >0 && email.length > 0 && password.length > 0 && password2.length>0){
    this.setState({disabled:false});
  }else{
    this.setState({disabled:true});
  }
}

checkValidations(control){
  switch(control.name){
    case 'name':
      if(control.value == null || control.value==""){
        this.setState({
          errors: { [control.name]: "name is a required field" }
        });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
        }
      break;
    case 'email':
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
       const result = pattern.test(control.value);
      if(control.value == null || control.value==""){
        this.setState({
          errors: { [control.name]: "email is a required field" }
        });
      }else if(result===false){
        this.setState({
          errors: { [control.name]: "not a valid email id" }
        });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
      }
      break;
    case 'password':
      if(control.value == null || control.value==""){
        this.setState({
          errors: { [control.name]: "password is a required field" }
        });
      }else{
        this.setState({
          errors: { [control.name]: undefined }
        });
        }
      break;
   case 'password2':
    if(control.value == null || control.value==""){
      this.setState({
        errors: { [control.name]: "password is a required field" }
      });
    }else if([this.state.password] != control.value){
      this.setState({
        errors: { [control.name]: "password mismatch" }
      });
    }else{
      this.setState({
        errors: { [control.name]: undefined }
      });
      }
      break;
  }

}


onSubmit(e) {
  e.preventDefault();

  const userData = {
    name:this.state.name,
    email: this.state.email,
    password: this.state.password,
    password2:this.state.password2
  };

  this.props.registerUser(userData,this.props.history);
  /*let registerUrl = `${apiUrl.baseUrl}${apiUrl.register}`;
axios
  .post(registerUrl, userData)
  .then(res => {
    console.log("success");
   this.props.history.push("/login");
  })
  .catch(err => {
    console.log(err);
  });*/
}


    render() {
      const { errors } = this.state;

        return (
            <div>
              <div class="register"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-8 m-auto"> 
           <h1 class="display-4 text-center">Sign Up</h1> 
           <p class="lead text-center">Create your DevConnector account</p> 
           <form action="create-profile.html" onSubmit={this.onSubmit}> 
             <div class="form-group"> 
               <input type="text" 
               className={classnames("form-control form-control-lg", {
            "is-invalid": errors.name})} 
          placeholder="Name" name="name" required 
               value={this.state.name}
           onChange={this.onChange}/> 
           {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
             </div> 
             <div class="form-group"> 
               <input type="email" className={classnames("form-control form-control-lg", {
            "is-invalid": errors.email
          })}
          placeholder="Email Address" name="email" 
               value={this.state.email}
               onChange={this.onChange}/> 
               <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small> 
             
               {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
             </div> 
             <div class="form-group"> 
               <input type="password" className={classnames("form-control form-control-lg", {
            "is-invalid": errors.password
          })}
           placeholder="Password" name="password" 
               value={this.state.password}
               onChange={this.onChange}/>

               {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )} 
             </div> 
             <div class="form-group"> 
               <input type="password" className={classnames("form-control form-control-lg", {
            "is-invalid": errors.password2
          })}
           placeholder="Confirm Password" name="password2"
               value={this.state.password2}
               onChange={this.onChange} />
               {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )} 
             </div> 
             <input type="submit" class="btn btn-info btn-block mt-4" disabled={this.state.disabled} /> 
           </form> 
         </div> 
       </div> 
     </div> 
   </div> 
  
            </div>
        )
    }
}




const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error
});
//This will connect to redux.Interanlly it will go to redux and get the store and call the mapStateToProps.
//State is created from calling root reducer (Index.js).
//Also which Actions are mapped to this componant are defined as { registerUser } which is nothing but mapDispatchToProps
export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
