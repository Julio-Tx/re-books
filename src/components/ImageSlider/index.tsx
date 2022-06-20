import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Data } from './SliderData';
import { Section } from './styled';

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const { length } = Data;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Section>
      <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
      {Data.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={slide.id}
        >
          {index === current && (
          <img src={slide.image} alt="slides" className="image" />
          )}
        </div>
      ))}
    </Section>
  );
}
