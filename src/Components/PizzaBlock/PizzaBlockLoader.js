import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="132" cy="142" r="115" />
    <rect x="0" y="280" rx="6" ry="6" width="280" height="25" />
    <rect x="0" y="323" rx="6" ry="6" width="280" height="81" />
    <rect x="0" y="425" rx="6" ry="6" width="110" height="31" />
    <rect x="140" y="422" rx="22" ry="22" width="140" height="38" />
  </ContentLoader>
);

export default PizzaBlockLoader;
