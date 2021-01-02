import React from 'react';
import './Autorization.css';
import {Redirect} from 'react-router-dom'
import { logIn } from '../../../redux/actions';
import { connect } from 'react-redux';


class Autorization extends React.Component{
  state = {
    login: '',
    password: '',
  }

  onInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  onAuthSubmit = (e) => {
    const {login, password} = this.state;
    if (login === "17696" && password === "17696"){
      e.preventDefault();
      this.props.login(true);
    } else {
      this.props.login(false);
      alert ("Неверный логин или пароль")
    }
  }

  render(){
    if (this.props.logInf){
      return <Redirect to="/users"/>
    }
    return(
      
     <div className="container">
      <div className="row">
        <form className="form-horizontal" onSubmit={this.onAuthSubmit}>
          <span className="head">___SIGN IN___</span>
          <div className="form-group">
          <input type="text" className="formauth" id="inputLogin" placeholder="LOGIN" name="login" onChange={this.onInputChange}/>
          </div>
          <div className="form-group help">
          <input type="password" className="formauth" id="inputPassword" placeholder="PASSWORD" name="password" onChange={this.onInputChange}/>
          </div>
          <button type="submit" className="btn btn-default">SIGN IN</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (log) => dispatch(logIn(log))
  }
}

const mapStateToProps = (state) => {
  return{
    logInf: state.authorizationReducer.logged
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Autorization);