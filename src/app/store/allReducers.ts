import app from './app_redux/reducer';
import login from '../features/unAuthentication/login/redux/reducer';
import { combineReducers } from 'redux';

export default combineReducers({ app, login });
