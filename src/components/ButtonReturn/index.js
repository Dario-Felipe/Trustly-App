import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonReturnContent } from './style';
import Arrow from '../../images/ButtonReturn/Arrow.svg';

const ButtonReturn = ({ view, confirm }) => (
  <>
    <ButtonReturnContent view={view} confirm={confirm}>
      <Link to="/">
        <img src={Arrow} alt="Arrow" />
        Back
      </Link>
    </ButtonReturnContent>
  </>
);

export default ButtonReturn;
