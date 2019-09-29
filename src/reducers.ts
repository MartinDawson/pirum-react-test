import musicReducer from './redcuers/musicReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    music: musicReducer
});