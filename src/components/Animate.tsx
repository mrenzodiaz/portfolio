import React from 'react';
import { isMobile } from 'react-device-detect';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Animate = ({ children, ...rest }: any) => (
  <ScrollAnimation {...rest} offset={isMobile ? 30 : rest.offset || null}>
    {children}
  </ScrollAnimation>
);

export default Animate;
