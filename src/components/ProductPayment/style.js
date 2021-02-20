import styled from 'styled-components';
import { fontFamilies, fontSizes, media } from '../../tokens';

export const SectionProductPayment = styled.section`
  margin-top: 30px;

  ${media.lg} {
    margin-top: 0;
    background: #f7f7f7;
    border-radius: 0 0 10px 10px;
  }
`;

export const ProductPaymentTitle = styled.div`
  margin-bottom: 16px;
  font-family: ${fontFamilies.secondary};
  font-size: ${fontSizes.large}px;

  b {
    display: none;
    font-weight: normal;
  }

  ${media.lg} {
    margin-left: 20px;

    b {
      display: inline-block;
    }
  }
`;

export const ProductPaymentContent = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 15px;
`;

export const ProductPaymentContentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: white;
  /* border: ${(props) => (props.selected ? 'solid 2px #63B55C;' : 'none')}; */
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;

  &:first-child {
    margin-top: 0;
    border: solid 2px #63b55c;
  }

  h5 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.medium}px;
    color: #565656;
    font-weight: 400;
    margin: 0;
  }

  img {
    width: 130px;
    height: 21px;
  }
`;

export const ProductPaymentContentTitle = styled.div`
  ${media.lg} {
    h5 {
      transform: translateY(12px);
    }
  }
`;

export const ProductPaymentContentPromo = styled.div`
  background: #ffcc00;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 16px;
  margin-top: 3px;

  span {
    color: #9e7d27;
    font-weight: 700;
    font-size: ${fontSizes.xxsmall}px;
  }

  ${media.lg} {
    transform: translateY(-40px);
    border-radius: 3px;
    width: 77px;
    height: 18px;
  }
`;
