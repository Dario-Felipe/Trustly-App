import React from 'react';
import * as S from './style';
import establishData from '../../service/create_transaction';
import '../../service/add_listener';

const ButtonPayment = () => (
  <>
    <S.SectionButtonPayment>
      <S.ButtonPaymentLink
        // eslint-disable-next-line no-undef
        onClick={() => PayWithMyBank.establish(establishData)}
      >
        Continue
      </S.ButtonPaymentLink>
    </S.SectionButtonPayment>
  </>
);

export default ButtonPayment;
