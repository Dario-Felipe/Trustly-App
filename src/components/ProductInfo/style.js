import styled from 'styled-components';
import { fontFamilies, fontSizes, media } from '../../tokens';

export const SectionProductInfo = styled.section`
  padding: 20px 0;

  h3 {
    font-family: ${fontFamilies.secondary};
  }

  ${media.sm} {
    padding: 50px 0;
  }

  ${media.lg} {
    h3 {
      display: none;
    }
  }
`;

export const ProductInfoContent = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 15px;
  position: relative;

  a {
    margin: 20px 20px 0 0;
    position: absolute;
    right: 0;
    top: 0;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ProductInfoDescription = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 10px;
    width: 110px;
    height: 130px;
  }

  ${media.sm} {
    justify-content: space-around;

    img {
      width: 230px;
      height: 150px;
    }
  }
`;

export const ProductInfoDescriptionText = styled.div`
  margin: 0 0 0 20px;

  h4 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    margin-bottom: 5px;
  }

  h5,
  p {
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.small}px;
  }

  p {
    color: #a5a5a5;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #a5a5a5;
      font-family: ${fontFamilies.primary};
      font-size: ${fontSizes.small}px;
    }
  }

  ${media.sm} {
    margin: 0;
  }
`;

export const ProductInfoPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0 0;

  ${media.sm} {
    justify-content: space-around;
  }
`;

export const ProductInfoPriceText = styled.div`
  h5 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0;
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.medium}px;
    color: #a5a5a5;
  }
`;

export const ProductInfoPriceNumber = styled.div`
  span {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.xxxlarge}px;
    margin-right: 20px;
  }
`;
