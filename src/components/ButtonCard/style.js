import styled from 'styled-components';
import colors from '../../tokens/colors';
import fontFamilies from '../../tokens/font-families';
import fontSizes from '../../tokens/font-sizes';

export const ButtonCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
`;
