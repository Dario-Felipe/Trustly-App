import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Api from '../../service/api';

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
    </>
  );
};

export default Main;
