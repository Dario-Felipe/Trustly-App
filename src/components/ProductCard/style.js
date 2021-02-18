import styled from 'styled-components';
import fontFamilies from '../../tokens/font-families';
import fontSizes from '../../tokens/font-sizes';
import media from '../../tokens/media';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 300px;
  height: 374px;
  margin-bottom: 20px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);

  ${media.lg} {
    margin-bottom: 66px;
  }
`;

export const CardTitle = styled.h2`
  font-family: ${fontFamilies.secondary};
  font-size: ${fontSizes.large}px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 20px;
`;

export const CardOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardOptionsContent = styled.div`
  margin: 16px 0;

  label {
    margin: 0 10px 0 0;
    color: #8d8d8d;
    font-size: ${fontSizes.xsmall}px;
  }

  select {
    width: 70px;
    height: 30px;
    border-radius: 26px;
    font-size: ${fontSizes.xsmall}px;
    padding: 0 10px;

    &:focus {
      outline: none;
    }
  }

  ${media.sm} {
    label,
    select {
      font-size: ${fontSizes.medium}px;
    }
  }

  ${media.sm} {
    label,
    select {
      font-size: ${fontSizes.xsmall}px;
    }
  }
`;

export const CardPrice = styled.h3`
  text-align: center;
  font-size: ${fontSizes.large}px;
  margin: 6px 0 14px 0;

  span {
    margin-right: 10px;
  }
`;
