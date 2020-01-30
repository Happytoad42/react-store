import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

export const Homepage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default Homepage;
