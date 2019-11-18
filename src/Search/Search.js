import React from 'react'

class Search extends React.Component {
    render() {
        return(
            <form className="search-bar">
                <fieldset>
                    <legend>
                        <h3>Search: </h3>
                    </legend>
                    <input type="text" placeholder="e.g. Cheese" required></input>
                    <button type="submit">Search</button>
                </fieldset>
            </form>
        )
    }
}

export default Search