import React from 'react'

class Filters extends React.Component {
    render() {
        return(
            <form>
                <label>
                    Print Type:
                    <select id="print-type-select">
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </label>
                <label>
                    Book Type: 
                    <select id="book-type-select">
                        <option value="ebooks">No Filter</option>
                        <option value="free-ebooks">Free EBooks</option>
                        <option value="paid-ebooks">Paid EBooks</option>
                        <option value="full">Full Text</option>
                        <option value="partial">Partial Text</option>
                    </select>
                </label>
            </form>
        )
    }
}

/*
This needs to make an API request using the value of the input
from Search.js, along with a filter or printType value from the
select elements here.  Then (using a promise) set the books state
in App to those results.
*/

export default Filters