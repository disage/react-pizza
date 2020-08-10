import React from 'react';
import './Main.scss';
import CategoryBtn from '../Components/CategoryBtn/CategoryBtn';
const Main = () => {
  return (
    <div className="Main">
      <div className="categoryWrapper">
        <CategoryBtn items={['Мясные', 'Вегеторианские', 'Гриль', 'Острые']} />
      </div>
    </div>
  );
};

export default Main;
