import React, { Component } from 'react';
import './App.css';
import CategoryList from './components/CategoryList'

class App extends Component {

// componentDidMount = () => {
//     this.getCategories()
//   }

//   getCategories = () => {
//     BooksAPI.getAll().then(allBooks => {
//       this.setState({
//         currentlyReading: allBooks.filter((b) => b.shelf === 'currentlyReading'),
//         wantToRead: allBooks.filter((b) => b.shelf === 'wantToRead'),
//         read: allBooks.filter((b) => b.shelf === 'read'),
//       })
//     })
//   }

  render() {
    return (
      <div className="App">
        <CategoryList />
      </div>
    );
  }
}

export default App;
