import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
//mui icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// firebase
import { useAuthState } from 'react-firebase-hooks/auth';
//redux
import { useDispatch } from 'react-redux';

import { addToCart } from '../../features/cart';
import PrimeIcon from '../../images/prime-icon.png';
import { ProductList } from '../../productData';
import { AmazonFashion, Container } from './styled';
import { auth } from '../../DB/firebase';
import ProductType from '../../types/Product';

function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const product: ProductType = ProductList.find((x) => x.id === id)!;

  const [smallPhoto, setSmallPhoto] = useState<string>(product.imgSmall[0]);
  const [largePhoto, setLargePhoto] = useState<string>(product.imgLarge[0]);

  const [user] = useAuthState(auth);

  const [qtd, setQtd] = useState<number>(1);

  function setPhoto0() {
    setSmallPhoto(product.imgSmall[0]);
    setLargePhoto(product.imgLarge[0]);
  }
  function setPhoto1() {
    setSmallPhoto(product.imgSmall[1]);
    setLargePhoto(product.imgLarge[1]);
  }
  function setPhoto2() {
    setSmallPhoto(product.imgSmall[2]);
    setLargePhoto(product.imgLarge[2]);
  }

  function handleSelect(e: React.ChangeEvent<{ value: unknown }>) {
    const qtd = e.target.value as number;
    setQtd(qtd);
  }

  const handleSubmit = () => {
    if (!user) {
      navigate('/login');
    }
    for (let i = 0; i < qtd; i += 1) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        rating: product.rating,
        title: product.title,
        info: product.info,
        imgSmall: product.imgSmall,
        imgLarge: product.imgLarge,
        imgSrc: product.imgSrc,
        price: `${product.priceWhole}.${product.priceFraction}`,
        priceWhole: product.priceWhole,
        priceFraction: product.priceFraction,
        linkTitle: product.linkTitle,
        brand: product.brand,
        color: product.color,
        weight: product.weight,
        description: product.description,
        nameOfProduct: product.nameOfProduct,
      }))
    }
  };
  //   for (let i = 0; i < qtd; i += 1) {
  //     dispatch({
  //       type: 'ADD_TO_CART',
  //       item: {
  //         id,
  //         name: product.name,
  //         nameOfProduct: product.nameOfProduct,
  //         image: product.imgSrc,
  //         price: `${product.priceWhole}.${product.priceFraction}`,
  //         priceWhole: product.priceWhole,
  //         priceFraction: product.priceFraction,
  //         color: product.color,
  //       },
  //     });
  //   }
  // };

  // get date of delivering
  const today = new Date();
  const afterTomorrow = new Date(today);
  afterTomorrow.setDate(afterTomorrow.getDate() + 2);

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  } as const;
  const date = afterTomorrow.toLocaleDateString('pt-PT', options);

  return (
    <div>
      <AmazonFashion>
        <img
          className="fashion"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON-FASHION/SUBNAV/MEGASUB/AMAZON_FASHION_ES_LOGO_384x90._CB452866070_.jpg"
          alt="amazon fashion"
        />
        <div className="list">
          <a href="/#">
            <div className="nav-item">
              <p>MULHER</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>HOMEM</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MENINA</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MENINO</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>BEBE</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MALAS</p>
            </div>
          </a>
          <a href="/#">
            <div className="nav-item">
              <p>MARCAS</p>
            </div>
          </a>

          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/30/AMAZON_FASHION/2021/PRIME_WARDROBE/REBRAND/pt_PT/TBYB_Right_Nav._CB639750099_.jpg"
            alt="prime"
          />
        </div>
      </AmazonFashion>
      <Container>
        <div className="div-main">
          <div className="mini-images">
            <img
              className={(smallPhoto === product.imgSmall[0]) ? 'img-selected' : 'img'}
              onMouseEnter={setPhoto0}
              src={product.imgSmall[0]}
              alt="mini"
            />
            <img
              className={(smallPhoto === product.imgSmall[1]) ? 'img-selected' : 'img'}
              onMouseEnter={setPhoto1}
              src={product.imgSmall[1]}
              alt="mini"
            />
            <img
              className={(smallPhoto === product.imgSmall[2]) ? 'img-selected' : 'img'}
              onMouseEnter={setPhoto2}
              src={product.imgSmall[2]}
              alt="mini"
            />
          </div>
          <div className="div-left">
            <div className="image-zoom">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: false,
                    src: smallPhoto,
                    width: 590,
                    height: 570,
                  },
                  largeImage: {
                    src: largePhoto,
                    width: 1500,
                    height: 1433,
                  },
                  enlargedImageContainerDimensions: {
                    width: '140%',
                    height: '105%',
                  },
                }}
              />
            </div>
            <p className="hint">Passe o rato por cima da imagem para ampliar</p>
          </div>

          <div className="div-middle">
            <div className="div-middle-top">
              <a href="/#">
                Visite a Loja da {product.name.toUpperCase()} (em Espanhol)
              </a>
              <p className="description">{product.description}</p>

              <div className="rating">
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <StarHalfIcon style={{ color: 'darkorange', fontSize: 20 }} />
                <span>|</span>
                <p>{product.rating} avaliações</p>
              </div>
            </div>
            <div className="div-middle-center">
              <div className="price">
                <p className="price-big">{product.priceWhole}</p>
                <p className="price-low">{product.priceFraction} €</p>
              </div>
              <img className="prime-icon" src={PrimeIcon} alt="prime icon" />
              <p className="iva">
                Por favor verifique o preço final do produto durante o processo
                de compra, pois a taxa de IVA que corresponde à sua morada de
                entrega apenas será calculada nesse momento.
              </p>
            </div>
            <div className="div-middle-bottom">
              <div className="specs-left">
                <p>Marca</p>
                <p>Cor</p>
                <p>Peso do produto</p>
                <p>Nome do modelo</p>
              </div>
              <div className="specs-right">
                <p>{product.brand}</p>
                <p>{product.color}</p>
                <p>{product.weight} Kilogramos</p>
                <p>{product.nameOfProduct}</p>
              </div>
            </div>
          </div>

          <div className="div-right">
            <div className="right-content">
              <div className="price">
                <p className="price-big">{product.priceWhole}</p>
                <p className="price-low">{product.priceFraction} €</p>
              </div>
              <img className="prime-icon" src={PrimeIcon} alt="prime icon" />
              <p>
                e <a href="/#">Devoluções GRÁTIS</a>
              </p>
              <p>
                Entrega GRÁTIS <span>{date}</span>.
              </p>
              <a href="/#" className="location">
                <LocationOnOutlinedIcon fontSize="small" /> Enviar a Portugal
              </a>
              <p className="stock">Em stock.</p>

              <form>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="qtd">Quantidade:</label>
                <select value={qtd} onChange={handleSelect}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button type="button" onClick={handleSubmit}>
                  Adicionar ao carrinho
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default ProductPage;
