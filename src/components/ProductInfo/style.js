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

  ${media.lg} {
    padding: 30px;
    border-radius: 10px 10px 0 0;

    a {
      display: none;
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

  ${media.lg} {
    img {
      display: none;
    }
  }
`;

export const ProductInfoDescriptionText = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;

  ${media.sm} {
    margin: 0;
  }

  ${media.lg} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProductInfoDescriptionTextTitle = styled.div`
  h3 {
    display: none;
  }

  h4 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    margin-bottom: 5px;
  }

  p {
    color: #a5a5a5;
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.small}px;
  }

  ${media.lg} {
    h3 {
      display: block;
      font-family: ${fontFamilies.secondary};
      font-size: ${fontSizes.large}px;
    }

    h4 {
      font-size: ${fontSizes.medium}px;
    }

    p {
      width: 60%;
    }
  }
`;

export const ProductInfoDescriptionTextDelivey = styled.div`
  h5 {
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.small}px;
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

  ${media.lg} {
    margin-right: 25px;

    h5 {
      font-size: ${fontSizes.large}px;
    }
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

  ${media.lg} {
    justify-content: flex-end;
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

  ${media.lg} {
    h5,
    p {
      font-size: ${fontSizes.small}px;
    }
  }
`;

export const ProductInfoPriceNumber = styled.div`
  span {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.xxxlarge}px;
    margin-right: 20px;
  }

  ${media.lg} {
    span {
      margin-right: 0;
      margin-left: 20px;
    }
  }
`;
