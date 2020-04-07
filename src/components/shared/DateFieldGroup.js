import React, { Component } from 'react';

import PropTypes from "prop-types"; //to put check on the properties.installed using npm install prop-types
import classnames from "classnames";

class DateFieldGroup extends Component {
constructor(props){
    super(props);
}



    render() {
        return (
            <div>
                <h6>{this.props.info}</h6> 
             <div class="form-group"> 
               <input type={this.props.type} className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.error
        })}
        name={this.props.name} 
               value={this.props.value} onChange={this.props.onChange} id={this.props.id}/> 
               {this.props.error && <div className="invalid-feedback">{ this.props.error}</div>} 
            </div>
             
            </div>
        )
    }
}

DateFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
     value: PropTypes.instanceOf(Date).isRequired,
     type: PropTypes.instanceOf(Date),
    //value:PropTypes.string.isRequired,
    type:PropTypes.string,
    onChange: PropTypes.func.isRequired
  };
 



export default DateFieldGroup;
