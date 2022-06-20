import React from 'react';
import { Container } from './styled';

interface StandTypes {
  title: string,
  imgSrc: string,
  linkTitle: string,
}

export default function Stand({ title, imgSrc, linkTitle }: StandTypes) {
  return (
    <Container>
      <h3>{title}</h3>
      <img src={imgSrc} alt="solar energy" />
      <a href="/#">{linkTitle}</a>
    </Container>
  );
}
