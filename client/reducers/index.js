import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const toggleQuantity = (state = {quantity: 0, price: 15}, action) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      return Object.assign({}, state, {
        quantity: state.quantity+1
      });
    case 'DECREMENT_QUANTITY':
      return Object.assign({}, state, {
        quantity: state.quantity-1
      });
    default:
      return state;
  }
};

const saveSearchQuery = (state = {cuisine: ''}, action) => {
  switch (action.type) {
    case 'SAVE_SEARCH_QUERY':
      return Object.assign({}, state, {
        cuisine: action.data
      });
    default:
    return state;
  }
};

const orders = (state = {isFetching: false, result: [], error: null}, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        orders: action.result
      })
    case 'FETCH_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: 'Oops'

      })
    default:
      return state
  }
};

const toggleAuth = (state = { isSignIn: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTHBTN':
      return Object.assign({}, state, {
        isSignIn: !state.isSignIn,
      });
    default:
      return state;
  }
};


const loginUser = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        userID: action.data.id,
        userName: action.data.name,
        isChef: action.data.chef,
      });
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  toggleQuantity,
  saveSearchQuery,
  orders,
  toggleAuth,
  loginUser,
  routing: routerReducer,
});

export default rootReducer;
