import React, { useState, useEffect } from 'react';
import * as S from './style';
import Api from '../../service/api';
import ProductImage from '../ProductImage';
import BankIMG from '../../images/ProductCheck/BankIMG.svg';

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

  const { thumbnailURL, description, maxresURL, color, price } = info;

  return (
    <>
      <S.SectionProductOrder>
        <div className="container">
          <div className="row">
            <ProductImage url={maxresURL} />
            <div className="col-12 col-lg-7">
              <h3>Review and confirmation</h3>
              <S.GlobalContent>
                <S.ProductOrderContent>
                  <S.Content>
                    <h4>Order Summary</h4>
                    <S.ContentInfo>
                      <img src={thumbnailURL} alt="ProductImage" />
                      <S.ContentInfoDescription>
                        <h5>{description}</h5>
                        <p>
                          x 1, {color}, Size 41 Item #{id}
                        </p>
                      </S.ContentInfoDescription>
                    </S.ContentInfo>
                  </S.Content>
                  <S.ProductCheckContent>
                    <h4>Payment Method</h4>
                    <S.ContentMethod>
                      <img src={BankIMG} alt="BankImage" />
                      <p>Online Banking</p>
                    </S.ContentMethod>
                  </S.ProductCheckContent>
                </S.ProductOrderContent>
                <S.ContentPrice>
                  <S.ContentPriceView>
                    <S.ContentPriceViewText>
                      <h5>Total cost</h5>
                      <p>Delivery included</p>
                    </S.ContentPriceViewText>
                    <span>${parseFloat(price).toFixed(0)}</span>
                  </S.ContentPriceView>
                </S.ContentPrice>
              </S.GlobalContent>
            </div>
          </div>
        </div>
      </S.SectionProductOrder>
    </>
  );
};

export default ProductOrder;
