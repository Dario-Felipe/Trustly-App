import styled from 'styled-components';
import colors from '../../tokens/colors';
import { fontFamilies, fontSizes, media } from '../../tokens';

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.url ? '' : '20px 0 0')};
  background: ${(props) => (props.url ? '' : 'white')};

  a {
    width: 275.7px;
    height: 41.77px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.green};
    color: white;
    border-radius: 5px;
    font-family: ${fontFamilies.secondary};
    font-size: ${fontSizes.medium}px;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
      text-decoration: none;
      background: #51614e;
    }
  }

  ${media.lg} {
    justify-content: ${(props) => (props.url ? '' : 'flex-end')};
    background: ${(props) => (props.url ? '' : 'none')};
    padding: ${(props) => (props.url ? '' : '0 15px 20px')};
  }
`;

export const ButtonReturnContent = styled.div`
  display: ${(props) => (props.view ? 'block' : 'none')};

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    color: black;
    font-family: ${fontFamilies.primary};
    font-size: 18px;
    font-weight: 400;
    transition: all 0.4s;

    &:hover {
      text-decoration: none;
      background: #c9c9c9;
    }

    img {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

  ${media.sm} {
    a {
      padding: 10px 30px;
      font-size: ${fontSizes.large}px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }

  ${media.lg} {
    a {
      padding: 5px 15px;
      font-size: ${fontSizes.medium}px;

      img {
        width: 17px;
        height: 17px;
        margin-right: 10px;
      }
    }
  }
`;

export const ButtonPayment = styled.button`
  width: 100%;
  padding: 10px 0;
  background: ${colors.green};
  border: none;
  color: white;
  font-family: ${fontFamilies.secondary};
  font-weight: 700;
  border-radius: 6px;
  transition: all 0.3s;

  &:hover {
    background: #51614e;
  }

  ${media.sm} {
    width: 50%;
  }

  ${media.lg} {
    width: 302px;
  }
`;
