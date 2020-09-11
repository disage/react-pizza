import React from 'react';
import './CategoryBtn.scss';

const CategoryBtn = React.memo(function CategoryBtn({ activeCategory, items, onClickItem }) {
  return (
    <ul className="CategoryBtn">
      <li
        className={activeCategory === null ? 'activeCategory' : ''}
        onClick={() => onClickItem(null)}>
        Все
      </li>
      {items &&
        items.map((name, index) => (
          <li
            className={activeCategory === index ? 'activeCategory' : ''}
            onClick={() => onClickItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
    </ul>
  );
});

export default CategoryBtn;
