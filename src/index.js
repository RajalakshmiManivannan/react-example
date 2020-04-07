import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





const navbar = <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
<div class="container">
  <a class="navbar-brand" href="landing.html">DevConnector</a>
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
      <li class="nav-item">
        <a class="nav-link" href="register.html">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Login</a>
      </li>
    </ul>
  </div>
</div>
</nav>;

//jsx expressions
let name = 'Aachu';
const element = <h1>Hello {name}</h1>


//jsx functions in expressions
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Newstein',
    lastName : 'Technologies'
}



//const elementObject = <h1>Hello {formatName(user)}</h1> -- if in case of single line

//use brace in case of multiple lines
const elementObject = (<h1>
    Hello {formatName(user)}
    </h1>);





//ReactDOM.render(elementObject, document.getElementById('root')); -- for jsx example

ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
