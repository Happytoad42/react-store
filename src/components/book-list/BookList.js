import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';

import './BookList.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className='book-list'>
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (error) {
      return <ErrorIndicator error={error} />;
    }

    if (loading) {
      return <Spinner />;
    }

    return <BookList onAddedToCart={onAddedToCart} books={books} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
