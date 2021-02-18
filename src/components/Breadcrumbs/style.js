import styled from 'styled-components';
import { media } from '../../tokens';

export const SectionBreadcrumbs = styled.section`
  display: none;

  ${media.sm} {
    display: block;
    margin: 60px 0 0;
  }
`;

export const BreadcrumbsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
  }

  ${media.lg} {
    img {
      width: 905px;
    }
  }
`;
