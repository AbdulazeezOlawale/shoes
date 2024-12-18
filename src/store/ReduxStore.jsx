import { createStore, applyMiddleware } from 'redux';

// Load initial state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedItems = localStorage.getItem("selectedItems");

    return {
      selectedItems: serializedItems ? JSON.parse(serializedItems) : [],
    };
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return { selectedItems: [], user: null};
  }
};


// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("selectedItems", JSON.stringify(state.selectedItems));
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
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

// Action Types
const SELECT_ITEM = 'SELECT_ITEM';
const DESELECT_ITEM = 'DESELECT_ITEM';

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case DESELECT_ITEM:
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