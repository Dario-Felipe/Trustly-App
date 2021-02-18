import React from 'react';
import * as S from './style';
import Avatar from '../../images/UserAvatar/Avatar.svg';
import ButtonReturn from '../ButtonReturn/index';

const Header = ({ store }) => (
  <>
    <S.SectionHeader>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <S.HeaderContent>
              <img src={Avatar} alt="UserAvatar" />
              <S.HeaderContentTitle>
                {store ? 'Checkout' : 'Sneakers'}
              </S.HeaderContentTitle>
              <ButtonReturn view={store} />
            </S.HeaderContent>
          </div>
        </div>
      </div>
    </S.SectionHeader>
  </>
);

export default Header;
