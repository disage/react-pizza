import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={508}
    viewBox="0 0 280 508"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="130" cy="130" r="130" />
    <rect x="6" y="285" rx="3" ry="3" width="268" height="27" />
    <rect x="6" y="336" rx="6" ry="6" width="268" height="90" />
    <rect x="0" y="472" rx="6" ry="6" width="106" height="27" />
    <rect x="129" y="459" rx="22" ry="30" width="150" height="49" />
  </ContentLoader>
);

export default PizzaBlockLoader;
