import React, { useEffect } from "react";
import { withLazyImageContext } from "./LazyImageContext";
import "../LazyImage/lazyimage.css";

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, aspectRatio, lazyLoad]);

  return (
    <div className="lazyImage" style={{ paddingTop }}>
      <img className="lazyImage__img" alt="projects" data-src={src} />
    </div>
  );
};

export default withLazyImageContext(LazyImage);
