/* eslint-disable no-undef */
import React, { useState } from 'react';
import * as S from './style';
import OnlineBank from '../../images/ProductPayment/OnlineBank.svg';
import CardPay from '../../images/ProductPayment/CardPay.svg';
import ApplePay from '../../images/ProductPayment/ApplePay.svg';
import Button from '../Button';
import establishData from '../../service/create_transaction';
import '../../service/add_listener';

const ProductPayment = () => {
  const [isSelected, setSelected] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <>
      <S.SectionProductPayment>
        <S.ProductPaymentTitle>
          <span>
            <b>Select your</b> Payment method
          </span>
        </S.ProductPaymentTitle>
        <S.ProductPaymentContent>
          <S.ProductPaymentContentButton onClick={() => handleSelect(true)}>
            <S.ProductPaymentContentTitle>
              <h5>Online Banking</h5>
              <S.ProductPaymentContentPromo>
                <span>SAVE $10</span>
              </S.ProductPaymentContentPromo>
            </S.ProductPaymentContentTitle>
            <img src={OnlineBank} alt="OnlineBanking" />
          </S.ProductPaymentContentButton>
          <S.ProductPaymentContentButton onClick={() => handleSelect(false)}>
            <h5>Card Payment</h5>
            <img src={CardPay} alt="OnlineBanking" />
          </S.ProductPaymentContentButton>
          <S.ProductPaymentContentButton onClick={() => handleSelect(false)}>
            <h5>Apple Pay</h5>
            <img src={ApplePay} alt="OnlineBanking" />
          </S.ProductPaymentContentButton>
        </S.ProductPaymentContent>
        <Button
          handle={
            isSelected ? () => PayWithMyBank.establish(establishData) : null
          }
          permission={!isSelected}
        >
          Continue
        </Button>
      </S.SectionProductPayment>
    </>
  );
};

export default ProductPayment;
