import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeFromCart } from '../../features/cart';
import { Container } from './styled';
import PrimeIcon from '../../images/prime-icon.png';

interface Product {
  id: string,
  name: string,
  nameOfProduct: string,
  imgSmall: string,
  priceWhole: string,
  priceFraction: string,
  color: string,
}

function ProductCheckout({
  id,
  name,
  nameOfProduct,
  imgSmall,
  priceWhole,
  priceFraction,
  color,
}: Product) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div>
      <Container>
        <div className="img-product">
          <img src={imgSmall} alt={name} />
        </div>
        <div className="product-info">
          <Link to={`/product/${id}`}>
            <span className="name">{nameOfProduct}</span>
          </Link>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
          <span className="stock">Em stock</span>
          <div className="prime-icon">
            <img src={PrimeIcon} alt="prime icon" />
          </div>
          <div className="gift">
            <input type="checkbox" />
            <span>Isto é um presente</span>
          </div>
          <div className="product-color">
            <h4>Color: </h4>
            <span>{color}</span>
          </div>
          <div className="product-footer">
            <div className="select-wrap">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Qtd.:</label>
              <select name="qtd">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="delete">
              <div>
                <button type="button" onClick={handleDelete}>
                  Apagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductCheckout;
