import styled from 'styled-components';
import media from '../../tokens/media';
import colors from '../../tokens/colors';
import fontFamilies from '../../tokens/font-families';
import fontSizes from '../../tokens/font-sizes';

export const SectionHeader = styled.header`
  width: 100%;
  padding: 20px 10px;

  ${media.sm} {
    background: ${colors.gray};
    padding: 30px 15px;
  }

  ${media.lg} {
    padding: 20px 10px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  img {
    width: 30px;
    height: 30px;
  }

  ${media.sm} {
    justify-content: space-around;

    img {
      width: 50px;
      height: 50px;
    }
  }

  ${media.lg} {
    justify-content: center;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const HeaderContentTitle = styled.h2`
  display: none;

  ${media.sm} {
    display: block;
    font-family: ${fontFamilies.primary};
    font-weight: 400;
    font-size: ${fontSizes.xxlarge}px;
    margin-bottom: 0;
  }

  ${media.lg} {
    font-size: ${fontSizes.xlarge}px;
    width: 100%;
    text-align: center;
  }
`;
