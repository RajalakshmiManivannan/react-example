import React, { Component } from 'react'

import PropTypes from "prop-types"; //to put check on the properties.installed using npm install prop-types
import classnames from "classnames";

class InputGroup extends Component {
    constructor(props){
        super(props);
    }

//implementing the properties. after receiving properties i am using it here.
    render() {
        return (
            <div>
               <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={this.props.icon} />
          </span>
        </div>
        <input
          className={classnames("form-control form-control-lg", {
            "is-invalid": this.props.error
          })}
  
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
              {this.props.error && <div className="invalid-feedback">{ this.props.error}</div>}  

      </div>
            </div>
        )
    }
}

//validation.. making sure that properties met my conditions
InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };
  InputGroup.defaultProps = {
    type: "text"
  };
  
  export default InputGroup;//exporting the entire thing not only class so removing from there and exporting at the end