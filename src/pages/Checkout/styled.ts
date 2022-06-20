import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #ddd;
  padding-top: 10px;

  a {
    text-decoration: none;
    font-size: 11pt;
    color: #007199;
    font-weight: 450;
  }
  a:hover {
    text-decoration: underline;
    color: #ff9f00;
  }

  .div-left {
    min-width: 800px;
    padding: 20px;
    width: 82%;
    margin: 20px 20px;
    background-color: white;

    .header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 20px;

      p {
        font-size: 22pt;
        margin-bottom: -5px;
        margin-top: 0;
        font-weight: 450;
      }
    }
  }

  // nao mexer
  .footer {
    display: flex;
    font-size: 15pt;
    margin-top: 5px;
    justify-content: right;
  }
  .price {
    display: flex;
    margin-left: 4px;

    .eur {
      margin: 0;
      margin-top: -5px;
      font-weight: 600;
      font-size: 22pt;
    }
    .cent {
      font-size: 11pt;
      font-weight: 500;
      margin: 1px 2px 0px 2px;
    }
  }

  .div-right {
    padding: 20px;
    width: 19%;
    height: 80px;
    margin: 20px 30px 20px 0px;
    background-color: white;
    .subtotal {
      display: flex;
      font-size: 15pt;
      white-space: nowrap;

      .price {
        margin-top: -4px;
      }
    }
    button {
      margin-top: 10px;
      background-color: #ffd814;
      border: none;
      width: 100%;
      height: 30px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default Container;
