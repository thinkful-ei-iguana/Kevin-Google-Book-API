import React from 'react'

class Book extends React.Component {
    render() {
        return(
            <section>
                <h3 className="book-title">{this.props.title}</h3>
                <p className="author-title">Author: {this.props.authors}</p>
                <p className="price-tag">Price: {this.props.amount}</p>
                <p className="description">{this.props.description}</p>
                <img src={this.props.imageLinks.smallThumbnail} alt={`The cover of ${ this.props.title }`}/>
            </section>
        )
    }
}

export default Book;