import styled from 'styled-components';

export const Container = styled.div`
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

  a {
    color: #007199;
    text-decoration: none;
    font-size: 9pt;
    font-weight: 600;
  }

  img {
    max-height: 250px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 20px;
  }
`;
