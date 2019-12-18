import React from 'react'
import { Route, Switch, BrowserRouter} from "react-router-dom"
import Search from "./Search"
import './App.css'

export const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Search}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
