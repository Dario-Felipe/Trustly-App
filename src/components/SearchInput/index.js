import React from 'react';
import * as S from './style';
import Vector from '../../images/SearchInput/Vector.svg';

const SearchInput = () => (
  <>
    <S.SectionSearch>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <S.SearchContent>
              <img src={Vector} alt="Search" />
              <S.SearchContentInput
                type="text"
                placeholder="Search for your sneaker"
              />
            </S.SearchContent>
          </div>
        </div>
      </div>
    </S.SectionSearch>
  </>
);

export default SearchInput;
