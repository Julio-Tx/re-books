import styled from 'styled-components';

export const Fix = styled.div`
 margin: 0 auto;
width: 342px;
display: block;
`;
export const Container = styled.div`
  display: column;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  width: 342px;

  img {
    width: 100px;
    margin-top: 20px;
    margin-left: 35%;
  }
`;
export const Button = styled.button``;

export const Form = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  margin-top: 15px;
  padding: 15px 20px 15px 20px;
  border-radius: 5px;
  .title {
    font-size: 20pt;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 0;
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
    width: 97%;
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
  button {
    height: 30px;
    width: 100%;
    border: 1px solid #949494;
    background-image: linear-gradient(#f6db99, #f1c351);
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(0.95);
  }
  .privacy {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 9pt;
  }
`;

export const Divider = styled.div`
  height: 0.4px;
  width: 340px;
  margin-top: 30px;
  margin-bottom: -18px;
  background: #ddd;
`;

export const DividerText = styled.span`
  position: absolute;
  font-size: 10pt;
  margin-top: 8px;
  padding: 0px 5px;
  color: #737373;
  background-color: white;
`;

export const ButtonRegister = styled.button`
  width: 343px;
  margin-top: 40px;
  height: 30px;
  border: 1px solid #949494;
  background-image: linear-gradient(#f6f7f9, #e7e9ec);
  border-radius: 3px;
  cursor: pointer;

  :hover {
    filter: brightness(0.95);
  }
`;

export const FakeLink = styled.span`
  cursor: pointer;
  color: #007199;
  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
