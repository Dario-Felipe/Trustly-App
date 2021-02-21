import React from 'react';
import * as S from './style';
import Button from '../Button';

const ProductCard = ({ id, name, thumb, price }) => (
  <>
    <div className="col-12 col-sm-6 col-lg-4">
      <S.CardContainer>
        <S.Card key={id}>
          <img src={thumb} alt={name} />
          <S.CardTitle>{name}</S.CardTitle>
          <S.CardOptions>
            <S.CardOptionsContent>
              <label>Size</label>
              <select disabled>
                <option value="41">41</option>
              </select>
            </S.CardOptionsContent>
            <S.CardOptionsContent>
              <label>Quantity</label>
              <select disabled>
                <option value="1">1</option>
              </select>
            </S.CardOptionsContent>
          </S.CardOptions>
          <S.CardPrice>
            <span>$</span>
            {price}
          </S.CardPrice>
          <Button id={id} url={`/checkout/${id}`}>
            Add to cart
          </Button>
        </S.Card>
      </S.CardContainer>
    </div>
  </>
);

export default ProductCard;
