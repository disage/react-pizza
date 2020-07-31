import React from 'react';
import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="logoWrapper">
        <div className="logo"></div>
        <div className="logoDescriptionWrapper">
          <h1 className="logoName">REACT PIZZA</h1>
          <p className="logoDescription">Самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="basketBtn">
        <p className="basketCost">123 $</p>
        <div className="basketDivider"></div>
        <div className="basketCount">3</div>
      </div>
    </div>
  );
};

export default Header;
