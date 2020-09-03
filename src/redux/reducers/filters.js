const intialState = {
  category: 0,
  sortBy: 'popular',
};
const filters = (state = intialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  return state;
};

export default filters;
