import {createStore, combineReducers, applyMiddleware} from 'redux'; // создание стора, группировка редьюсеров, группировка мидлвэр

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// Reducers
import {postReducer} from './reducers/postReducer';
import {userReducer} from "./reducers/userReducer";

const reducers = combineReducers({
    posts: postReducer,
    users: userReducer

});

const middleWare = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleWare);
export default store;