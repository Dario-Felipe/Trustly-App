import styled from 'styled-components';
import fontSize from '../../tokens/font-sizes';
import fontFamilies from '../../tokens/font-families';
import media from '../../tokens/media';

export const SectionSearch = styled.section`
  margin-top: 30px;

  ${media.sm} {
    margin-top: 50px;
  }

  ${media.lg} {
    width: 100%;
    font-size: ${fontSize.xlarge}px;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px #bdbdbd;

  img {
    margin-left: 10px;
  }

  ${media.sm} {
    img {
      width: 30px;
      height: 30px;
    }
  }

  ${media.lg} {
    img {
      width: 22px;
      height: 22px;
      margin-left: 20px;
    }
  }
`;

export const SearchContentInput = styled.input`
  border: none;
  padding: 5px 0px 5px 20px;
  text-align: center;
  font-size: ${fontSize.xlarge}px;
  color: #a8a8a8;
  font-family: ${fontFamilies.secondary};

  &::-webkit-input-placeholder {
    color: #a8a8a8;
    font-family: ${fontFamilies.secondary};
  }

  &:focus {
    outline: none;
  }

  ${media.sm} {
    font-size: ${fontSize.xxlarge}px;
  }

  ${media.lg} {
    width: 100%;
    font-size: ${fontSize.large}px;
    margin-right: 65px;
  }
`;
