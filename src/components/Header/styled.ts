import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  min-width: 1500px;
  z-index: 100;

  a {
    text-decoration: none;
  }

  img {
    width: 100px;
    margin: 5px -10px 0px -5px;
  }

  .logo {
    display: flex;
    align-items: center;
    color: #ff9f00;
    margin: 0 25px;
  }
  .logo-image {
    margin-right: 10px;
  }
  .logo-title {
    text-decoration: none;
    border: 0;
    color: white;
  }
  .search-div {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
    margin: 0 10px;
  }
  .search-input {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
  .search-icon {
    padding: 5px;
    height: 22px !important;
    background-color: #ff9f00;
    cursor: pointer;
  }
  .nav {
    display: flex;
    justify-content: space-evenly;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    color: white;
    cursor: pointer;
  }
  .nav-item01 {
    font-size: 11px;
    padding: 0;
  }
  .nav-item02 {
    font-size: 14px;
    margin-top: -3px;
    font-weight: 700;
  }
  .nav-item-cart {
    display: flex;
    align-items: center;
    margin: 16px 20px 0px 10px;
    color: white;
  }
  .cart-count {
    margin: 0 10px;
  }
`;

export const ButtonLogout = styled.button`
  border: none;
  background: none;
  color: white;
  padding: 0;
  cursor: pointer;
`;
