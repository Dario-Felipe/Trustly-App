import React, { useState, useEffect } from 'react';
import Api from '../../service/api';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';

const Main = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await Api.get();
    const { results } = response.data;
    setProducts(results);
    console.log(products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <SearchInput />
    </>
  );
};

export default Main;
