import React, { Component } from 'react'

import PropTypes from 'prop-types';
import classnames from "classnames";

class SelectListGroup extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const SelectOptions = this.props.options.map(option=>(
            <option key={option.label} value={option.value}>{option.label}</option>)
            )


        return (
            <div>
                <div class="form-group"> 
               <select className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.error
        })}

                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}>  
                    {SelectOptions} 
               </select> 
               <small class="form-text text-muted">Give us an idea of where you are at in your career</small> 
               {this.props.error && <div className="invalid-feedback">{ this.props.error}</div>}  

            
             </div>
            </div>
        )
    
}


}

SelectListGroup.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired,
     onChange:PropTypes.func.isRequired,
};



export default SelectListGroup;
