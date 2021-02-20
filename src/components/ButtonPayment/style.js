import styled from 'styled-components';
import { colors, fontFamilies, media } from '../../tokens';

export const SectionButtonPayment = styled.section`
  background: white;
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lg} {
    justify-content: flex-end;
    background: none;
    padding: 0 15px 20px;
  }
`;

export const ButtonPaymentLink = styled.button`
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
