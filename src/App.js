import React, {Component} from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

class App extends Component {
	render() {
  return (
    <div>
      <BrowserRouter>
			 <Switch>
			  <Route exact path ="/" component={Login}/>
				<Route path ="/register" component={Register}/>
				<Route path = "/home" component={Home}/>
			 </Switch>
			</BrowserRouter>
    </div>
   );
  }
}

export default App;
