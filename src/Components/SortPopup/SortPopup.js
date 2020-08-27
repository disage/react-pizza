import React from 'react';
import './SortPopup.scss';

export const SortPopup = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLable = items[activeItem];

  const onSelectedItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };
  const toogleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <div ref={sortRef} className="SortPopup">
      <div onClick={() => toogleVisiblePopup()} className="sort">
        <div className={visiblePopup ? 'rotatedTreangle treangle' : 'treangle'}></div>
        <b className="sortLbl">Сортировка по:</b>
        <p className="sortValue">{activeLable}</p>
      </div>
      {visiblePopup && (
        <div className="popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  className={activeItem === index ? 'activeSort' : ''}
                  onClick={() => onSelectedItem(index)}
                  key={`${name}_${index}`}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
