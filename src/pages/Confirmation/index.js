import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductOrder from '../../components/ProductOrder';

const Confirmation = () => {
  const { id } = useParams();

  return (
    <>
      <Header view>Review and confirmation</Header>
      <Breadcrumbs full />
      <ProductOrder id={id} />
    </>
  );
};

export default Confirmation;
