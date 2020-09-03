import React, { useState } from 'react';
import './CategoryBtn.scss';

const CategoryBtn = React.memo(function CategoryBtn({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectedItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <ul className="CategoryBtn">
      <li
        className={activeItem === null ? 'activeCategory' : ''}
        onClick={() => onSelectedItem(null)}>
        Все
      </li>
      {items &&
        items.map((name, index) => (
          <li
            className={activeItem === index ? 'activeCategory' : ''}
            onClick={() => onSelectedItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
    </ul>
  );
});

export default CategoryBtn;
