import React from 'react';
import '../Form/Form.css';


class UsersListItem extends React.Component{
  
  render(){

    const {id, firstName, lastName, email, onDelete} = this.props;

    return(
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td><button type="button" className="btn" onClick={onDelete}>DELETE</button></td>
      </tr>
    )
  }
}

export default UsersListItem;