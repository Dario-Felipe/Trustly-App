import React from 'react';
import * as S from './style';
import Avatar from '../../images/UserAvatar/Avatar.svg';
import Button from '../Button';

const Header = ({ view, children }) => (
  <>
    <S.SectionHeader>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <S.HeaderContent>
              <img src={Avatar} alt="UserAvatar" />
              <S.HeaderContentTitle>{children}</S.HeaderContentTitle>
              <Button view={view} url="/" back />
            </S.HeaderContent>
          </div>
        </div>
      </div>
    </S.SectionHeader>
  </>
);

export default Header;
