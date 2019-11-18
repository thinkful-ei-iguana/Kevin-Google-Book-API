import React from 'react'

class Search extends React.Component {
    render() {
        return(
            <form className="search-bar" onSubmit={e => this.props.search(e)}>
                <fieldset>
                    <legend>
                        <h3>Search: </h3>
                    </legend>
                    <input 
                        type="text" 
                        id="search-query"
                        placeholder="e.g. Cheese"
                        required>
                    </input>
                    <button type="submit">Search</button>
                </fieldset>
            </form>
        )
    }
}

/*
This form needs to, on submit, make an API call to a url using
the value of the input like so 
"GET https://www.googleapis.com/books/v1/volumes?q={search terms}"
then (using a promise) add those results to the books state in App
and also update the search state in App.
*/

export default Search