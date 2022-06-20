import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { auth } from '../../DB/firebase';
import {
  Container, Row, Rows, LogBox,
} from './styled';
import ImageSlider from '../../components/ImageSlider';
import Product from '../../components/Product';
import Stand from '../../components/Stand';
import ProductType from '../../types/Product';

import { ProductList } from '../../productData';

export default function Home() {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [user] = useAuthState(auth);

  function getProducts() {
    setProducts(ProductList);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Rows>
        <Row>
          {products.map((product: ProductType) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              imgSrc={product.imgSrc}
              info={product.info}
              priceWhole={product.priceWhole}
              priceFraction={product.priceFraction}
              linkTitle={product.linkTitle}
            />
          ))}
          <Stand
            title="Descubra o Amazon Outlet"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/ES_Outlet_OD_DSC_379x304_Dec_2020._SY304_CB413249589_.jpg"
            linkTitle="Ver mais"
          />
          {!user ? (
            <LogBox>
              <h3>Inicie sessão para obter a melhor experiência</h3>
              <Link to="/login">
                <button type="button">Inicie sessão com segurança</button>
              </Link>
            </LogBox>
          )
            : <Stand title="Ucrânia: a sua doação conta" imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/x-site/Ukraine/uk_flag_379x304._SY304_CB626377026_.jpg" linkTitle="Se puder, contribua" />}

        </Row>
        <Row>
          <Stand
            title="O Amazon Prime está aqui"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/Tagus/GW/Prime_Cards/Desktop/ephesus_gw_dt_dashboard_379x304_twitch._SY304_CB669915101_.jpg"
            linkTitle="Descubra mais"
          />
          <Stand
            title="A nossa seleção de Beleza"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/x-Site/2021/February/FujiDashBeauty1x._SY304_CB659988640_.jpg"
            linkTitle="Ver mais"
          />
          <Stand
            title="Informática e acessórios"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/x-Site/2021/February/FujiDashPC1x._SY304_CB659988641_.jpg"
            linkTitle="Ver mais"
          />
          <Stand
            title="As últimas tendências"
            imgSrc="https://images-eu.ssl-images-amazon.com/images/G/30/Tagus/Categories/Softlines_379x304._SY304_CB411420869_.jpg"
            linkTitle="Descubra mais"
          />
        </Row>
      </Rows>
    </Container>
  );
}
