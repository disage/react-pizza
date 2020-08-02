import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryBtn.scss';
const CategoryBtn = (props) => {
  return (
    <div className="CategoryBtn">
      <NavLink
        activeStyle={{
          color: '#fff',
          background: '#282828',
        }}
        to={`/${props.category}`}>
        {props.text}
      </NavLink>
    </div>
  );
};

export default CategoryBtn;
