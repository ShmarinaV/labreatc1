import React from 'react';
import TablePage from '../Pages/Table/Table/Table';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import MainPage from '../Pages/Main/Main'



class App extends React.Component{

  render(){ 

    return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/users" component={TablePage}/>
            
            <Route render={() => <h2>Page not found 404</h2>}/>
        </Switch>
        </BrowserRouter>
      
    )
  }
}

export default App;