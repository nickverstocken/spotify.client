import {combineReducers} from 'redux';
import authReducer from './authenticateReducer';

export default combineReducers({
   auth: authReducer
});