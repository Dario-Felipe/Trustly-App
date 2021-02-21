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

export const GlobalContent = styled.div`
  background: white;

  ${media.lg} {
    border-radius: 10px;
    background: #f7f7f7;
    padding-bottom: 260px;
  }
`;

export const ProductOrderContent = styled.div`
  ${media.lg} {
    padding: 64px 50px;
    display: flex;
  }
`;

export const Content = styled.div`
  background: #f7f7f7;
  padding: 20px;
  border-radius: 10px;

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
    padding: 0;

    h4 {
      font-size: ${fontSizes.large}px;
      font-weight: normal;
      text-align: left;
    }
  }
`;

export const ContentInfo = styled.div`
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
    flex-direction: column;
    justify-content: normal;
    align-items: flex-start;

    h4 {
      font-size: ${fontSizes.large}px;
      font-weight: normal;
      text-align: left;
    }

    img {
      display: none;
    }
  }
`;

export const ContentInfoDescription = styled.div`
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
    width: 80%;
  }

  ${media.sm} {
    h5 {
      font-size: ${fontSizes.xlarge}px;
    }

    p {
      font-size: ${fontSizes.large}px;
      width: 60%;
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

export const ProductCheckContent = styled.div`
  background: #f7f7f7;
  border-radius: 10px 10px 0 0;
  margin-top: 30px;
  padding: 20px;

  h4 {
    margin-bottom: 20px;
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.large}px;
    font-weight: 700;
  }

  ${media.sm} {
    h4 {
      text-align: center;
      font-size: ${fontSizes.xlarge}px;
    }
  }

  ${media.lg} {
    margin-top: 0;
    padding: 0;

    h4 {
      font-size: ${fontSizes.large}px;
      font-weight: normal;
      text-align: left;
    }
  }
`;

export const ContentMethod = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  img {
    width: 47px;
    height: 47px;
  }

  p {
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.medium}px;
    margin: 0 0 0 10px;
  }

  ${media.sm} {
    justify-content: center;
  }

  ${media.lg} {
    justify-content: flex-start;
  }
`;

export const ContentPrice = styled.div`
  padding: 0 20px 20px;
  background: #f7f7f7;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: calc(100% - 20px);
    height: 2px;
    background: #d6d6d6;
  }

  ${media.lg} {
    border: none;

    &::before {
      display: none;
    }
  }
`;

export const ContentPriceView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 100%;

  span {
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.huge}px;
  }

  ${media.sm} {
    justify-content: space-around;
  }

  ${media.lg} {
    padding-top: 0;

    span {
      font-weight: bold;
    }
  }
`;

export const ContentPriceViewText = styled.div`
  h5,
  p {
    font-family: ${fontFamilies.secondary};
  }

  h5 {
    font-size: ${fontSizes.medium}px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 0;
    color: #a5a5a5;
  }

  ${media.lg} {
    h5 {
      font-weight: normal;
    }
  }
`;
