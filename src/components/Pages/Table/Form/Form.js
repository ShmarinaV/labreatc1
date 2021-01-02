import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../../redux/actions';
import './Form.css';


class Form extends React.Component{

  state = {
    firstName: '',
    lastName: '',
    email:''
  }

  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    const {firstName, lastName, email} = this.state;
    e.preventDefault();
    this.props.addedNewItem(firstName, lastName, email);
  }

  render(){

    return (
      <div className="addForm">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
          <div className="col-auto">
            <button type="submit" className="btn">
            Add User
            </button>
            </div>
            <div>
              <label htmlFor="firstNameInput" >FIRST NAME</label>
              <input
                name="firstName"
                className="form-control"
                id="firstNameInput"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastNameInput">LAST NAME</label>
              <input
              name="lastName"
                className="form-control"
                id="lastNameInput"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="emailInput">EMAIL</label>
              <input
                name = "email"
                type = "email"
                className = "form-control"
                id = "emailInput"
                onChange = {this.onInputChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addedNewItem: (firstName, lastName, email) => dispatch(addItem(firstName,lastName,email))
  }
}

export default connect(null,mapDispatchToProps)(Form);