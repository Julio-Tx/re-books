import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .image {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 50), transparent);
  }
  .right-arrow {
    position: absolute;
    top: 20%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .left-arrow {
    position: absolute;
    top: 20%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  .slide {
    opacity: 0;
    transition-duration: 0.5s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 0.5s;
    transform: scale(1);
  }
`;
