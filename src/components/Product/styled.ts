import styled from 'styled-components';

export const Prod = styled.div`
  display: column;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 10px;
  padding: 0px 20px;
  width: 310px;
  height: 380px;
  background-color: white;
  z-index: 1;

  .product-info {
    margin-top: 10px;
    p {
      display: flex;
      margin: 0;
    }
    margin-bottom: 32px;
  }
  .price {
    display: flex;
  }
  .price-big {
    font-size: 18pt;
  }
  .price-low {
    padding: 5px 0px 0px 2px;
    font-size: 9pt;
  }

  a {
    color: #007199;
    text-decoration: none;
    font-size: 9pt;
    font-weight: 600;
  }

  img {
    max-height: 172px;
    width: 100%;
    object-fit: contain;
  }
`;
