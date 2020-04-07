import React, { Component } from 'react'

import PropTypes from "prop-types"; 
import classnames from "classnames";

class CheckBoxGroup extends Component {
constructor(props){
    super(props);
}

    render() {
        return (
            <div>
                <div class="form-check mb-4"> 
               <input class="form-check-input" type={this.props.type} 
               name={this.props.name} 
               value={this.props.value} 
               id={this.props.id} 
                onClick={this.props.onClick}/>
               {/* onChange={this.props.onChange}/>  */}
               <label class="form-check-label" for="current"> 
                {this.props.labelInfo}
               </label> 
             </div>
            </div>
        )
    }
}


CheckBoxGroup.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    id:PropTypes.string.isRequired,
    labelInfo:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
};


export default CheckBoxGroup;
