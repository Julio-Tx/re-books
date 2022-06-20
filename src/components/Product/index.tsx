import React from 'react';
import { Link } from 'react-router-dom';
import { Prod } from './styled';

interface ProductType {
  id: string,
  title: string,
  info: string,
  imgSrc: string,
  priceWhole: string,
  priceFraction: string,
  linkTitle: string,
}

export default function Product({
  id,
  title,
  info,
  imgSrc,
  priceWhole,
  priceFraction,
  linkTitle,
}: ProductType) {
  return (
    <Prod>
      <h3>{title}</h3>

      <Link to={`/product/${id}`}>
        <img src={imgSrc} alt="solar energy" />
      </Link>
      <div className="product-info">
        <div className="price">
          <p className="price-big">{priceWhole}</p>
          <p className="price-low">{priceFraction} €</p>
        </div>
        <p className="product-title">{info}</p>
      </div>

      <a href="/#">{linkTitle}</a>
    </Prod>
  );
}
