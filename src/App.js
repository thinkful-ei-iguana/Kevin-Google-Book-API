import React from 'react';
import './App.css';
import Search from './Search/Search'
import Filters from './Filters/Filters'
import Display from './Display/Display'

class App extends React.Component {
  state = {
      books: [],
      search: "",
      loading: false,
      error: null
    }

  fetchBooks = (url) => {
    fetch(url)
      .then(res => res.json())
      //.then(res => this.setState({books}));
  }

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <Search />
        <Filters />
        <Display />
      </main>
    )
  }
}

export default App;