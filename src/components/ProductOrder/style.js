import styled from 'styled-components';
import { media, fontFamilies, fontSizes } from '../../tokens';

export const SectionProductOrder = styled.section`
  padding: 20px 0;

  h3 {
    font-family: ${fontFamilies.secondary};
    margin-bottom: 30px;
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

export const ProductOrderContent = styled.div`
  background: #f7f7f7;
  border-radius: 10px;
  padding: 20px 15px;

  h4 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ${media.sm} {
    h4 {
      font-size: ${fontSizes.xlarge}px;
      text-align: center;
    }
  }

  ${media.lg} {
    padding: 64px 50px;
    border-radius: 10px 10px 0 0;

    h4 {
      font-size: ${fontSizes.large}px;
      font-weight: normal;
      text-align: left;
    }
  }
`;

export const ProductOrderContentInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  ${media.sm} {
    justify-content: center;

    img {
      width: 180px;
      height: 180px;
    }
  }

  ${media.lg} {
    justify-content: normal;

    img {
      display: none;
    }
  }
`;

export const ProductOrderContentInfoDescription = styled.div`
  margin-left: 30px;

  h5 {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    font-weight: normal;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0;
    color: #a5a5a5;
    width: 70%;
  }

  ${media.sm} {
    h5 {
      font-size: ${fontSizes.xlarge}px;
    }

    p {
      font-size: ${fontSizes.large}px;
    }
  }

  ${media.lg} {
    margin-left: 0;

    h5 {
      font-size: ${fontSizes.medium}px;
    }

    p {
      font-size: ${fontSizes.small}px;
    }
  }
`;
