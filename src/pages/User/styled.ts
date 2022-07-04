import styled from 'styled-components';

export const Container = styled.div`
  display: column;
  margin-left: auto;
  p {
    margin: 10px 0;
  }

  .logo {
    width: 100px;
    margin: 15px auto 0px 47%;
  }

  a {
    cursor: pointer;
    color: #007199;
    text-decoration: none;
  }
  a:hover {
    color: orange;
    text-decoration: underline;
  }
  .book-images {
    display: flex;
    img {
      width: 100px;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }
  .book-data {
    padding: 10px 0px;
    p {
      margin: 0px;
    }
    .desc {
      margin: 5px 0px 5px 15px;
      font-weight: 600;
    }
  }
  .non-update {
    display: column;
  }
`;

export const Form = styled.form`
  width: 420px;
  border: 1px solid #ddd;
  margin: 15px auto 0px auto;
  padding: 15px 25px 15px 20px;
  border-radius: 5px;
  .title {
    font-size: 20pt;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 0;
  }

  span {
    margin: 0px 0px;
    font-weight: 600;
  }

  input,
  label {
    display: block;
  }
  label {
    font-weight: 700;
    font-size: 9pt;
  }

  input {
    width: 99.5%;
    height: 25px;
    padding-left: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid #949494;
  }
  input:focus {
    border: 1px solid #ff9f00;
    box-shadow: 0 0 0.5em #ff9f00;
    outline: none;
  }
  
  textarea {
    width: 99%;
    height: 100px;
    padding: 5px;
    resize: none;
    outline: none;
    border-radius: 3px;
    border: 1px solid #949494;
  }
  textarea:focus {
    border: 1px solid #ff9f00;
    box-shadow: 0 0 0.5em #ff9f00;
    outline: none;
  }
  button {
    color: white;
    font-weight: 550;
    margin-top: 10px;
    margin-left: 42.8%;
    height: 30px;
    width: 100px;
    border: 1px solid #949494;
    background-image: linear-gradient(#235fde, #4d83f7);
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(0.95);
  }
  .back-button {
    margin-left: 0px;
    margin-bottom: -10px;
  }
  .add-button {
    width: 150px;
    margin-left: 35%;
  }
  .select {
    padding: 2px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .privacy {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 9pt;
  }

  .divider {
    height: 44px;
    margin-bottom: -18px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.14),
      rgba(0, 0, 0, 0.03) 3px,
      transparent
    );
  }
  .divider::after {
    display: block;
    height: 44px;
    background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0), #fff);
    content: '';
  }

  .footer {
    display: block;
    font-size: 9pt;
  }
`;

export const FakeLink = styled.span`
  cursor: pointer;
  color: #007199;
  :hover {
    color: red;
    text-decoration: underline;
  }
`;
