import React from 'react';
import Form from '../Form/Form';
import UserList from '../UserList/UserList';
import BackBtn from '../BackBtn/BackBtn'


class TablePage extends React.Component{  

  render(){
    return(
      <div>
        <Form/>
        <UserList/>
        <BackBtn/>
      </div>
    )
  }
}

export default TablePage;