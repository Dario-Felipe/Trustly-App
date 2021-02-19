import React from 'react';
import * as S from './style';

const ProductImage = ({ url }) => (
  <>
    <div className="col-5 d-none d-lg-flex align-items-center">
      <S.ProductImageContent>
        <img src={url} alt="ProductImage" />
      </S.ProductImageContent>
    </div>
  </>
);

export default ProductImage;
