import React from 'react';
import './Main.scss';
import CategoryBtn from '../Components/CategoryBtn/CategoryBtn';
import { SortPopup } from '../Components/SortPopup/SortPopup';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
const Main = ({ items }) => {
  return (
    <div className="Main">
      <div className="categoryWrapper">
        <CategoryBtn items={['Мясные', 'Вегеторианские', 'Гриль', 'Острые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Main;
