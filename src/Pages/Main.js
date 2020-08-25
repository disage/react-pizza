import React from 'react';
import './Main.scss';
import CategoryBtn from '../Components/CategoryBtn/CategoryBtn';
import { SortPopup } from '../Components/SortPopup/SortPopup';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
const Main = () => {
  return (
    <div className="Main">
      <div className="categoryWrapper">
        <CategoryBtn items={['Мясные', 'Вегеторианские', 'Гриль', 'Острые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <div className="content__items">
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
      </div>
    </div>
  );
};

export default Main;
