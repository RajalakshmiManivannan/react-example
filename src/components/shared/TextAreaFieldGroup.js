import React, { Component } from 'react'

import PropTypes from "prop-types";
import classnames from "classnames";

class TextAreaFieldGroup extends Component {
constructor(props){
    super(props);
}


    render() {
        return (
            <div>
                <div class="form-group"> 
               <textarea className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.error
        })}
 
               placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.props.value} 
                onChange={this.props.onChange}> </textarea> 
               <small class="form-text text-muted">{this.props.info}</small> 
               {this.props.error && <div className="invalid-feedback">{ this.props.error}</div>}  

             </div>
            </div>
        )
    }
}


TextAreaFieldGroup.propTypes={
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string,
    error:PropTypes.string,
    info:PropTypes.string,
    onChange: PropTypes.func.isRequired
};
TextAreaFieldGroup.defaultProps = {
    type: "text"
};

export default TextAreaFieldGroup;
