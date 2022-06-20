import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #ddd;
`;

export const Rows = styled.div`
  display: column;
  margin-top: 250px;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: flex;
  z-index: 1;
`;

export const LogBox = styled.div`
  display: column;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 10px;
  padding: 0px 20px;
  width: 310px;
  height: 150px;
  background-color: white;
  z-index: 1;

  button {
    background-color: #ffd814;
    border: none;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
