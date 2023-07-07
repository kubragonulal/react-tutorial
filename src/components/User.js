import React, { Component } from 'react'
import PropTypes from "prop-types";
class User extends Component {
    //State oluşturmanın başka bir yolu
    state = {
        isVisible : false
    }
    // Bind işlemi başka yolu
    constructor(props){
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
    }
    
   onClickEvent = (number,e) => {
    console.log(number);
   }

  render() {
    //Destructing
    const {name, department, salary} = this.props;
    const {isVisible} = this.state;    
    return (
       <div className="col-md-8 mb-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick = {this.onClickEvent.bind(this,61)}>{name}</h4>

            <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
            
            </div>  
            {
                isVisible ? <div className="card-body"> 
                <p className="card-text">Maaş : {salary}</p>  
                <p className="card-text">Departman : {department}</p>
                </div> : null
            }
            
        </div>    
    </div>
    )  
  }
}
User.defaultProps={
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok"
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}
export default User;