import { createStore, applyMiddleware } from 'redux';

// Load initial state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedItems = localStorage.getItem('selectedItems');
    const serializedUser = localStorage.getItem('user');
    const authToken = localStorage.getItem('authToken');

    return {
      selectedItems: serializedItems ? JSON.parse(serializedItems) : [],
      user: serializedUser ? JSON.parse(serializedUser) : null,
      authToken: authToken ? JSON.parse(authToken) : null
    };
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return { selectedItems: [], user: null, authToken: null };
  }
};

// Save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem('selectedItems', JSON.stringify(state.selectedItems));
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('authToken', state.authToken);
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

// Action Types
const SELECT_ITEM = 'SELECT_ITEM';
const DESELECT_ITEM = 'DESELECT_ITEM';
const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';
const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

// Action Creators
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData
});

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token
});

export const clearUser = () => ({
  type: CLEAR_USER
});

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
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        authToken: null
      };
    default:
      return state;
  }
};

// Create Redux store with middleware
const store = createStore(reducer, applyMiddleware(localStorageMiddleware));

export default store;