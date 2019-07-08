import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import home from './components/Home';

class App extends Component {
	render() {
  return (
    <div>
      <BrowserRouter>
			 <switch>
			  <Route path = "/home" component={home}/>
			 </switch>
			</BrowserRouter>
    </div>
  );
  }
}

export default App;
