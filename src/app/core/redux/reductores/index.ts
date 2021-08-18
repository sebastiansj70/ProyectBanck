import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
import account from './account/accountReductor';

export default combineReducers({ productos, account });
