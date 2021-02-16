import styled from 'styled-components';
import media from '../../tokens/media';
import fontFamilies from '../../tokens/font-families';
import fontSizes from '../../tokens/font-sizes';

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
