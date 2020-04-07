import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from '../src/components/Navbar';
import Login from '../src/components/Login';
import CreateProfile from '../src/components/create-profile/CreateProfile';
import AddEducation from '../src/components/AddEducation';
import AddExperience from '../src/components/AddExperience';
import SignUp from '../src/components/SignUp';
import Landing from '../src/components/Landing';
import Profiles from '../src/components/Profiles';
import profile from '../src/components/Profile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from '../src/components/PrivateRoute';
import Dashboard from '../src/components/Dashboard';

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    // <div className="App">
    //   <Navbar></Navbar>
    //    <Login></Login> 
    //    {/* <CreateProfile></CreateProfile>    */}
    //    {/* <AddEducation></AddEducation>   */}
    //     {/* <AddExperience></AddExperience>   */}
    //    {/* <SignUp></SignUp> */}
    // </div>
    

    <Provider store={store}>

  <Router>
    
    <div className="App">
     
    {/* -->nav bar has to be in all components */}
      <Navbar /> 
      {/* whatever inside the route its a kind of defining or configuration telling these are the nav or ruting available */}
      <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            {/* <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addexperience" component={AddExperience} />
          <Route exact path="/addeducation" component={AddEducation} />

          </div>
    </div>
  </Router>
  </Provider>

  );
}

export default App;
