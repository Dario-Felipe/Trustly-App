import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonCardContent } from './style';

const ButtonCard = ({ id }) => (
  <>
    <ButtonCardContent>
      <Link to={`/checkout/${id}`}>Add to cart</Link>
    </ButtonCardContent>
  </>
);

export default ButtonCard;
