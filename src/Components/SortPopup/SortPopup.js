import React from 'react';
import './SortPopup.scss';

export const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLable = items.find((obj) => obj.type === activeSortType).name;

  const onSelectedItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  };
  const toogleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutsideClick = (e) => {
    if (!e.path?.includes(sortRef.current)) {
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
              items.map((obj, index) => (
                <li
                  onClick={() => onSelectedItem(obj.type)}
                  className={activeSortType === obj.type ? 'activeSort' : ''}
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});
