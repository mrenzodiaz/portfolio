import React from 'react';
import { isMobile } from 'react-device-detect';
import ScrollAnimation from 'react-animate-on-scroll';

const Animate = ({ children, ...rest }: any) => (
  <ScrollAnimation {...rest} offset={isMobile ? 30 : rest.offset || null}>
    {children}
  </ScrollAnimation>
);

export default Animate;
