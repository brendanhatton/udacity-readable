import React, { Component } from 'react';
import './App.css';
import CategoryList from './components/CategoryList'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <CategoryList />

        <Route exact path='/' component={PostList} />
        <Route path='/:category/:id' component={PostDetail} />
        <Route exact path='/:category' component={PostList} />

      </div>
    );
  }
}

export default App;
