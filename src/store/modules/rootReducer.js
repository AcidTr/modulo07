import { combineReducers } from 'redux';

import cart from './cart/reducer';

/*
  combineReducers junta os reducers em um só.
  Permite a utilização de vários reducers.
*/
export default combineReducers({
  cart,
});
