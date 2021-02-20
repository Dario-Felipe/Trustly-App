import React, { useState, useEffect } from 'react';
import * as S from './style';
import Api from '../../service/api';
import ProductImage from '../ProductImage';

const ProductOrder = ({ id }) => {
  const [info, setInfo] = useState({});

  const loadInfo = async () => {
    const response = await Api.get();
    const results = response.data.results.find((item) => item.id === id);
    setInfo(results);
  };

  useEffect(() => {
    loadInfo();
  }, []);

  const { thumbnailURL, description, maxresURL, color } = info;

  return (
    <>
      <S.SectionProductOrder>
        <div className="container">
          <div className="row">
            <ProductImage url={maxresURL} />
            <div className="col-12 col-lg-7">
              <h3>Review and confirmation</h3>
              <S.ProductOrderContent>
                <h4>Order Summary</h4>
                <S.ProductOrderContentInfo>
                  <img src={thumbnailURL} alt="ProductImage" />
                  <S.ProductOrderContentInfoDescription>
                    <h5>{description}</h5>
                    <p>
                      x 1, {color}, Size 41 Item #{id}
                    </p>
                  </S.ProductOrderContentInfoDescription>
                </S.ProductOrderContentInfo>
              </S.ProductOrderContent>
            </div>
          </div>
        </div>
      </S.SectionProductOrder>
    </>
  );
};

export default ProductOrder;
