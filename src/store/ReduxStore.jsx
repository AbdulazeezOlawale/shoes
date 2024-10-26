import { createStore, applyMiddleware } from 'redux';

// Load initial state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('selectedItems');
    if (serializedState === null) {
      return { selectedItems: [] };
    }
    return { selectedItems: JSON.parse(serializedState) };
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return { selectedItems: [] };
  }
};

// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.selectedItems);
    localStorage.setItem('selectedItems', serializedState);
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
};

// Redux middleware to synchronize state with localStorage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  saveStateToLocalStorage(store.getState());
  return result;
};

// Initial state from localStorage or default
const initialState = loadStateFromLocalStorage();

// Reducer function
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
        selectedItems: state.selectedItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

// Create Redux store with middleware
const store = createStore(reducer, applyMiddleware(localStorageMiddleware));

export default store;