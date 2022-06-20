import React from 'react';
import { useSelector } from 'react-redux';

import Container from './styled';
import ProductCheckout from '../../components/ProductCheckout';
import ProductType from '../../types/Product';

interface Product {
  id: string,
  name: string,
  rating: number,
  title: string,
  info: string,
  imgSmall: string[],
  imgLarge: string[],
  imgSrc: string,
  price: string,
  priceWhole: string,
  priceFraction: string,
  linkTitle: string,
  brand: string,
  color: string,
  weight: string,
  description: string,
  nameOfProduct: string,
  };

function Checkout() {
  const cartOriginal = useSelector((state: any) => state.cart.value);
  let cart: Product[] = [...cartOriginal];

  //remove initial state item 
  cart.splice(0, 1);

  // price calculation
  
  let totalPrice = 0.0;
  function sumPrice() {
    for (let i = 0; i < cart.length; i += 1) {
      totalPrice += parseFloat(cart[i].price);
    }
  }
  sumPrice();
  const totalString = totalPrice.toFixed(2);
  const totalSplited = totalString.split('.');
  const priceWhole = totalSplited[0];
  const priceFraction = totalSplited[1];
  return (
    <Container>
      <div className="div-left">
        <div className="header">
          <p>Carrinho de compras</p>
          <a href="/#">Desmarcar todos os produtos</a>
        </div>
        {cart.map((item: ProductType) => (
          <ProductCheckout
            id={item.id}
            name={item.name}
            imgSmall={item.imgSrc}
            nameOfProduct={item.nameOfProduct}
            priceWhole={item.priceWhole}
            priceFraction={item.priceFraction}
            color={item.color}
          />
        ))}
        <div className="footer">
          <span>Subtotal ({cart.length} produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
        </div>
      </div>

      <div className="div-right">
        <div className="subtotal">
          <span>Subtotal ({cart.length} produtos):</span>
          <div className="price">
            <span className="cent">€</span>
            <span className="eur">{priceWhole}</span>
            <span className="cent">{priceFraction}</span>
          </div>
        </div>
        <button type="button">Finalizar compra</button>
      </div>
    </Container>
  );
}

export default Checkout;
