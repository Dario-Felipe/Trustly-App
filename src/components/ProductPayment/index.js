import React from 'react';
import * as S from './style';
import OnlineBank from '../../images/ProductPayment/OnlineBank.svg';
import CardPay from '../../images/ProductPayment/CardPay.svg';
import ApplePay from '../../images/ProductPayment/ApplePay.svg';

const ProductPayment = () => (
  <>
    <S.SectionProductPayment>
      <S.ProductPaymentTitle>
        <span>
          <b>Select your</b> Payment method
        </span>
      </S.ProductPaymentTitle>
      <S.ProductPaymentContent>
        <S.ProductPaymentContentButton selected>
          <S.ProductPaymentContentTitle>
            <h5>Online Banking</h5>
            <S.ProductPaymentContentPromo>
              <span>SAVE $10</span>
            </S.ProductPaymentContentPromo>
          </S.ProductPaymentContentTitle>
          <img src={OnlineBank} alt="OnlineBanking" />
        </S.ProductPaymentContentButton>
        <S.ProductPaymentContentButton>
          <h5>Card Payment</h5>
          <img src={CardPay} alt="OnlineBanking" />
        </S.ProductPaymentContentButton>
        <S.ProductPaymentContentButton>
          <h5>Apple Pay</h5>
          <img src={ApplePay} alt="OnlineBanking" />
        </S.ProductPaymentContentButton>
      </S.ProductPaymentContent>
    </S.SectionProductPayment>
  </>
);

export default ProductPayment;
