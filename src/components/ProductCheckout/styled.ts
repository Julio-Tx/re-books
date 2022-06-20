import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0px 10px;
  margin: 0;
  margin-top: 10px;
  border: 1px solid #ddd;

  .img-product {
    padding: 10px 20px 10px 0px;
    img {
      width: 200px;
    }
  }
  .product-info {
    display: inline-block;
    margin-top: 10px;
    .name {
      font-size: 15pt;
    }
    .price {
      padding-top: 8px;
      margin-left: 0px;
    }
    .stock {
      color: green;
      font-size: 9pt;
    }
    .prime-icon {
      margin-top: 5px;
    }
    img {
      width: 55px;
    }
    .gift {
      display: flex;
      font-size: 10pt;
      margin-left: -2px;

      span {
        margin-top: 0px;
      }
    }
    .product-color {
      display: flex;
      padding-top: 0px;
      font-size: 10pt;
      span {
        display: flex;
      }
      h4 {
        margin-top: 0;
        margin-right: 5px;
      }
    }
    .select-wrap {
      border: 1px solid #ddd;
      margin-top: -10px;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 0 0px 5px;
      width: 80px;
      background-color: #ebebeb;
      box-shadow: 0 0 1em #ddd;
    }

    .select-wrap label {
      font-size: 10pt;
      color: black;
      padding: 2px 8px 0;
    }

    select {
      background-color: #ebebeb;
      border: 0px;
      cursor: pointer;
    }
    .product-footer {
      display: flex;

      .delete {
        height: 18px;
        padding-left: 10px;
        border-left: 1px solid #ddd;
        margin-top: -5px;
        margin-left: 10px;

        div {
          font-size: 9pt;
          margin-top: 0px;
          a {
            font-size: 9pt;
            color: #007199;
          }
        }
        button {
          border: none;
          background-color: white;
          cursor: pointer;
        }
      }
    }
    a {
      text-decoration: none;
      color: black;
      font-weight: 450;
    }
  }
`;
