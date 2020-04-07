import React, { Component } from 'react'
import classnames from "classnames";
import axios from "axios";
import {apiUrl} from '../config';
import CreateProfile from '../components/create-profile/CreateProfile';
import AddExperience from '../components/AddExperience';
import AddEducation from '../components/AddEducation';

export default class Login extends Component {
    constructor(props){
        super(props);

          this.state = {
          email: "",
          password: "",
          errors: {},
          isLogin:false,
          validUser:"",
          disabled:true
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();
  
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
  
      let loginUrl = `${apiUrl.baseUrl}${apiUrl.login}`;
    axios
      .post(loginUrl, userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
       this.setState({isLogin : true});
       this.props.history.push("/dashboard");// go to dashboard page.. routing to dashboard component
      })
      .catch(err => {
        console.log(err);

      });


    }
  
    onChange(e) {
      this.checkValidations(e.target);
      //this.setState({ [e.target.name]: e.target.value });
      this.setState({[e.target.name]: e.target.value}, ()=> {
        this.isFormValid();
    }); 
    
   
      
    }

    
  
    isFormValid = () => {
       
      const {email, password} = this.state;
    
      if(email.length > 0 && password.length > 0){
        this.setState({disabled:false});
      }else{
        this.setState({disabled:true});
      }
 }
    
checkValidations(control){
  switch(control.name){
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
    break;

  }
}
}



    
    render() {
      const { errors } = this.state;
        return (
            <div>
              {/* {this.state.isLogin ? 
                //  ( <CreateProfile></CreateProfile>)
                // (<AddExperience></AddExperience>)
                  (<AddEducation></AddEducation>)
                :( */}
                <div class="login"> 
     <div class="container"> 
       <div class="row"> 
         <div class="col-md-8 m-auto"> 
           <h1 class="display-4 text-center">Log In</h1> 
           <p class="lead text-center">Sign in to your DevConnector account</p> 
           <form action="dashboard.html"  onSubmit={this.onSubmit}> 
             <div class="form-group"> 
               <input type="email" 
               className={classnames("form-control form-control-lg", {
            "is-invalid": errors.email
          })}
           placeholder="Email Address" 
           name="email" 
           value={this.state.email}
           onChange={this.onChange}
            /> 
            {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}

             </div> 
             <div class="form-group"> 
               <input type="password" 
               className={classnames("form-control form-control-lg", {
            "is-invalid": errors.password
          })}
           placeholder="Password" 
           name="password" 
           value={this.state.password}
                    onChange={this.onChange}
              /> 
              {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}

             </div> 
             <input type="submit" class="btn btn-info btn-block mt-4" disabled={this.state.disabled}/> 
           </form> 
         </div> 
       </div> 
     </div> 
   </div>
   
            </div>
        )
    }
}
