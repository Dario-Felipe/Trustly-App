import React from 'react';
import * as S from './style';
import BreadcrumbsIMG from '../../images/Checkout/BreadcrumbsIMG.svg';
import BreadcrumbsIMGFull from '../../images/Checkout/BreadcrumbsIMGFull.svg';

const Breadcrumbs = ({ full }) => (
  <>
    <S.SectionBreadcrumbs>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <S.BreadcrumbsContent>
              <img
                src={full ? BreadcrumbsIMGFull : BreadcrumbsIMG}
                alt="Breadcrumbs"
              />
            </S.BreadcrumbsContent>
          </div>
        </div>
      </div>
    </S.SectionBreadcrumbs>
  </>
);

export default Breadcrumbs;
