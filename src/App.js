import React from 'react';
import './App.css';
import Search from './Search/Search'
import Filters from './Filters/Filters'
import Display from './Display/Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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