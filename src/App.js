import React, { Component } from 'react';
import './App.css';
import CategoryList from './components/CategoryList'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import The404Page from './components/The404Page'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <CategoryList />
        <Switch>
          <Route exact path='/' component={PostList} />
          <Route path='/:category/:id' component={PostDetail} />
          <Route exact path='/:category' component={PostList} />
          <Route path='/404' component={The404Page} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    );
  }
}

export default App;
