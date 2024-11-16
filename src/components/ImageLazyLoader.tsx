import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageLazyLoader = ({ ...rest }) => (
  <LazyLoadImage {...rest} effect="blur" />
);

export default ImageLazyLoader;
