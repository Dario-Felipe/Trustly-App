import React, { useState, useEffect } from 'react';
import { SectionProducts } from './style';
import Api from '../../service/api';
import ProductCard from '../ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await Api.get();
    const { results } = response.data;
    setProducts(results);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <SectionProducts>
        <div className="container">
          <div className="row">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                thumb={item.thumbnailURL}
                name={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </SectionProducts>
    </>
  );
};

export default ProductList;
