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

export default Search