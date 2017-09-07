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

<div className="footer">
<a href="https://icons8.com/icon/47856/Up">Up icon credits</a>
</div>
      </div>
    );
  }
}

export default App;
