import React from 'react';
import './Main.scss';
import CategoryBtn from '../Components/CategoryBtn/CategoryBtn';
const Main = () => {
  return (
    <div className="Main">
      <div className="categoryWrapper">
        <CategoryBtn category="all" text="Все" />
        <CategoryBtn category="meat" text="Мясные" />
        <CategoryBtn category="vegan" text="Вегеторианские" />
        <CategoryBtn category="grill" text="Гриль" />
        <CategoryBtn category="spice" text="Острые" />
      </div>
    </div>
  );
};

export default Main;
