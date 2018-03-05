import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import notFound from './components/notfound/notfound';
import { Route, NavLink , Switch, Redirect}  from 'react-router-dom';

class App extends Component {
  render () {
    const activeStyle = { color : '#fa923f'};
    const liStyle = {margin : '10px', display : 'inline-block'};
    return (
      <div>
        <nav>
          <ul style={{listStyle: 'none', margin : 'auto', padding: '0'}}>
            <li style={liStyle}>
              <NavLink
                activeStyle={activeStyle}
                to="/users">Users</NavLink></li>
            <li style={liStyle}>
              <NavLink 
                activeStyle={activeStyle}
                to="/courses">Courses</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users}/>
          <Route path="/courses" component={Courses}/>
          <Redirect to="/courses" from="/all-courses"/>
          <Route component={notFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
