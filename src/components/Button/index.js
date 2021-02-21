import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Arrow from '../../images/ButtonReturn/Arrow.svg';

const Button = ({ url, handle, children, view, back }) => (
  <>
    {view || back ? (
      <S.ButtonReturnContent view={view}>
        <Link to={url}>
          <img src={Arrow} alt="Arrow" />
          Back
        </Link>
      </S.ButtonReturnContent>
    ) : (
      <S.ButtonContent url={url}>
        {url ? (
          <Link to={url}>{children}</Link>
        ) : (
          <S.ButtonPayment onClick={handle}>{children}</S.ButtonPayment>
        )}
      </S.ButtonContent>
    )}
  </>
);

export default Button;
