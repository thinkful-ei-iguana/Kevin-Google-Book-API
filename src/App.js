import React from 'react';
import './App.css';
import Search from './Search/Search'
import Filters from './Filters/Filters'
import Display from './Display/Display'

const key = 'AIzaSyBIbGRaxZ3mb4ddetLZ_Em83KlCFuzMYGk'
const baseUrl = `https://www.googleapis.com/books/v1/volumes?key=${key}&q=`
class App extends React.Component {
  state = {
      books: [],
      search: null,
      printType: null,
      bookType: null,
      loading: false,
      error: null
    }
  
  updateSearch = (e) => {
    e.preventDefault()
    const query = document.getElementById("search-query").value;
    console.log('default prevented')
    console.log('form value is: ', query)
    this.setState({search: query}, this.fetchBooks)
  }

  updateFilters = (e) => {
    const printType = document.getElementById("print-type-select").value;
    console.log('print type is: ', printType);
    const bookType = document.getElementById("book-type-select").value;
    console.log('book type is: ', bookType);
    this.setState({printType: printType, bookType: bookType}, this.applyFilters)
  }

  fetchBooks = () => {
    fetch(`${baseUrl}${this.state.search}`)
      .then(res => res.json())
      .then(res => this.setState({books: res.items}));
    console.log(this.state.books)
  }

  applyFilters = () => {
    let string;
    if (this.state.printType === null && this.state.bookType === null) {
      string =`${baseUrl}${this.state.search}`
    } else if (this.state.printType === null) {
      string =`${baseUrl}${this.state.search}&filter=${this.bookType}`
    } else if (this.state.bookType === null) {
      string =`${baseUrl}${this.state.search}&printType=${this.printType}`
    } else {
      string = `${baseUrl}${this.state.search}&filter=${this.bookType}&printType=${this.state.printType}`
    } fetch(`${string}`)
    .then(res => res.json())
    .then(res => this.setState({books: res}));
    console.log(this.state.books)
  }

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <Search 
          search={this.updateSearch}
          state={this.state}
        />
        <Filters
          filter={this.updateFilters}
          state={this.state}
        />
        <Display 
          state={this.state}
        />
      </main>
    )
  }
}

export default App;