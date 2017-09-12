import React, { Component } from 'react';
import './App.css';
import CategoryList from './components/CategoryList'
import CategoryPostList from './components/CategoryPostList'
import RootPostList from './components/RootPostList'
import PostDetail from './components/PostDetail'
import The404Page from './components/The404Page'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <CategoryList />
        <Switch>
          <Route exact path='/' component={RootPostList} />
          <Route path='/:category/:id' component={PostDetail} />
          <Route exact path='/:category' component={CategoryPostList} />
          <Route path='/404' component={The404Page} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    );
  }
}

export default App;
