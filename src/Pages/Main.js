import React from 'react';
import './Main.scss';
import CategoryBtn from '../Components/CategoryBtn/CategoryBtn';
import { SortPopup } from '../Components/SortPopup/SortPopup';
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегеторианские', 'Гриль', 'Острые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="Main">
      <div className="categoryWrapper">
        <CategoryBtn onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Main;
