import React, { Component } from 'react';
import HomePage from './containers/Index/index.js';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Temp from './containers/Personal/index.js';

class App extends Component{
  render(){
    return(
      <div>
        <Switch>
                <Route path="/" exact component={HomePage} />;
                <Route path="/personal" exact component={Temp} />
                
            </Switch>
      </div>
    )
  }
}

export default App;