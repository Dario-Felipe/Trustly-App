import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Api from '../../service/api';
import Remove from '../../images/ProductInfo/Remove.svg';
import ProductImage from '../ProductImage/index';
import ProductPayment from '../ProductPayment';
import establishData from '../../service/create_transaction';

const ProductInfo = ({ id }) => {
  const [product, setProduct] = useState({});

  const loadProduct = async () => {
    const response = await Api.get();
    const result = response.data.results.find((item) => item.id === id);
    setProduct(result);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const loadEstabilish = ({ price, currency, idLoad = id }) => {
    establishData.returnUrl = `/confirmation/${idLoad}#success`;
    establishData.amount = `${price}`;
    establishData.currency = `${currency}`;
  };

  useEffect(() => {
    loadEstabilish(product);
  }, [product]);

  const { thumbnailURL, description, price, color, maxresURL } = product;

  return (
    <>
      <S.SectionProductInfo>
        <div className="container">
          <div className="row">
            <ProductImage url={maxresURL} />
            <div className="col-12 col-lg-7">
              <h3>Checkout</h3>
              <S.ProductInfoContent>
                <Link to="/">
                  <img src={Remove} alt="RemoveButton" />
                </Link>
                <S.ProductInfoDescription>
                  <img src={thumbnailURL} alt={description} />
                  <S.ProductInfoDescriptionText>
                    <S.ProductInfoDescriptionTextTitle>
                      <h3>Cart Total</h3>
                      <h4>{description}</h4>
                      <p>
                        x 1, {color}, Size 41 Item #{id}
                      </p>
                    </S.ProductInfoDescriptionTextTitle>
                    <S.ProductInfoDescriptionTextDelivey>
                      <h5>Delivery details</h5>
                      <ul>
                        <li>John Smith</li>
                        <li>Phone no: 01312428200</li>
                        <li>Address: Redwood City, 2000</li>
                      </ul>
                    </S.ProductInfoDescriptionTextDelivey>
                  </S.ProductInfoDescriptionText>
                </S.ProductInfoDescription>
                <S.ProductInfoPrice>
                  <S.ProductInfoPriceText>
                    <h5>Total cost</h5>
                    <p>Delivery included</p>
                  </S.ProductInfoPriceText>
                  <S.ProductInfoPriceNumber>
                    <span>${parseFloat(price).toFixed(0)}</span>
                  </S.ProductInfoPriceNumber>
                </S.ProductInfoPrice>
              </S.ProductInfoContent>
              <ProductPayment />
            </div>
          </div>
        </div>
      </S.SectionProductInfo>
    </>
  );
};

export default ProductInfo;
