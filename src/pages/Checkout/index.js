import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/index';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductInfo from '../../components/ProductInfo';

const Checkout = () => {
  const { id } = useParams();

  return (
    <>
      <Header view>Checkout</Header>
      <Breadcrumbs />
      <ProductInfo id={id} />
    </>
  );
};

export default Checkout;
