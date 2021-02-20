import React from 'react';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import ProductList from '../../components/ProductsList';

const Main = () => (
  <>
    <Header home />
    <SearchInput />
    <ProductList />
  </>
);

export default Main;
