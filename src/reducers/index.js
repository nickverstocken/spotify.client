import {combineReducers} from 'redux';
import authReducer from './authenticateReducer';
import searchReducer from "../scenes/Search/searchReducer";
import relatedReducer from '../scenes/SearchDetail/relatedReducer';
export default combineReducers({
   auth: authReducer, searches: searchReducer, artistdetail: relatedReducer
});