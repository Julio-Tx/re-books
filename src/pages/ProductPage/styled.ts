import styled from 'styled-components';

export const AmazonFashion = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: solid 1px #ddd;
  font-size: 9pt;
  .list {
    display: flex;
    justify-content: space-evenly;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 6px;
    padding: 0 10%;
    color: white;
    text-decoration: none;
    color: black;
  }
  img {
    height: 50px;
    object-fit: contain;
    cursor: pointer;
  }
  .fashion {
    margin: 1px 350px 0px 30px;
  }
  a {
    padding: 0 10%;
    text-decoration: none;
    color: black;
  }
  .nav-item:hover {
    p {
      border-bottom: solid 2px #ff9f00;
    }
  }
`;

export const Container = styled.div`
  padding: 0 0;
  margin-top: 15px;
  
  min-width: 1500px;

  a:hover {
    color: red;
  }
  .div-main {
    display: flex;
  }
  .div-left {
    position: relative;
    width: 35%;
    margin-right: 80px;

    p {
      margin-top: 10px;
      text-align: center;
    }
  }
  .mini-images {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    img {
      width: 40px;
      margin: 10px;
    }
    img:hover {
      box-shadow: 0 0 0.5em #ff9f00;
      border: 1px solid #ff9f00;
    }
    .img-selected {
      box-shadow: 0 0 0.5em #ff9f00;
      border: 1px solid #ff9f00;
    }
  }
  .div-middle {
    width: 35%;
    height: 600px;
    margin-right: 10px;

    .div-right-top {
      border-bottom: 1px solid #ddd;
    }

    a {
      text-decoration: none;
      font-size: 11pt;
      color: #007199;
    }
    a:hover {
      text-decoration: underline;
      color: #ff9f00;
    }
  }
  .description {
    margin-top: 0px;
    font-size: 20pt;
    font-weight: 450;
  }
  .rating {
    display: flex;
    margin-top: -20px;
    p {
      margin-top: -2px;
      color: #007199;
    }
    span {
      margin-top: -2px;
      padding: 0px 10px;
    }
  }

  .price {
    display: flex;
    margin: 10px 0px -25px 0px;
  }
  .price-low {
    font-size: 10pt;
    margin-top: 7px;
  }
  .price-big {
    font-size: 25pt;
    font-weight: 480;
    margin-top: 0px;
  }

  .prime-icon {
    width: 60px;
    margin-bottom: 0;
  }
  .iva {
    font-size: 11pt;
  }
  .div-middle-center {
    border-bottom: 1px solid #ddd;
  }

  .div-middle-bottom {
    display: flex;
  }
  .specs-left {
    font-weight: 700;
    font-size: 11pt;
  }
  .specs-right {
    font-size: 11pt;
    margin-left: 20px;
  }

  .div-right {
    width: 13%;
    margin: 20px 0px 0px 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 20px 15px;
    height: 300px;

    .price {
      margin-top: -5px;
      margin-bottom: -35px;
    }
    .price-big {
      margin-top: -5px;
    }
    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 11pt;
      color: #007199;
    }
    a:hover {
      color: #ff9f00;
    }
    p {
      margin-top: 0px;
    }
    span {
      font-weight: 600;
    }
    .location {
      font-size: 11pt;
      margin-bottom: -10;
    }
    .stock {
      margin-top: 10px;
      color: green;
      font-weight: 600;
    }
    select {
      padding: 4px;
      margin-left: 4px;
    }
    button {
      margin-top: 10px;
      background-color: #ffd814;
      border: none;
      width: 100%;
      height: 30px;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;
