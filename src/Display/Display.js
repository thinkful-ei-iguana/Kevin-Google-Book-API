import React from 'react'
import Book from './Book'

class Display extends React.Component {
    render() {

        const books = this.props.state.books

        return(
            books.map(book => {
                const title = book.volumeInfo.title;
                const description = book.volumeInfo.description;
                const imageLinks = book.volumeInfo.imageLinks;
                const authors = book.volumeInfo.authors;
                const price = book.saleInfo.price;
                return (<Book key={book.id} title={title} description={description} authors={authors} imageLinks={imageLinks} amount={price}/>)
            })
        )
    }

}

/*
This needs to map the books state from App and display each item.
Probably in a UL with each result as an LI element.
*/

export default Display