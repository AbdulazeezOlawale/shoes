import { createStore } from 'redux';

const initialState = {
  selectedItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case 'DESELECT_ITEM':
      return {
        ...state,
        selectedItems: state.selectedItems.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;