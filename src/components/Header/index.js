import React from 'react';
import * as S from './style';
import Avatar from '../../images/UserAvatar/Avatar.svg';
import ButtonReturn from '../ButtonReturn/index';

const Header = ({ home, store, confirmPay }) => (
  <>
    <S.SectionHeader>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <S.HeaderContent>
              <img src={Avatar} alt="UserAvatar" />
              <S.HeaderContentTitle>
                {home ? 'Sneakers' : ''}
                {store ? 'Checkout' : ''}
                {confirmPay ? 'Review and confirmation' : ''}
              </S.HeaderContentTitle>
              <ButtonReturn view={store} confirm={confirmPay} />
            </S.HeaderContent>
          </div>
        </div>
      </div>
    </S.SectionHeader>
  </>
);

export default Header;
