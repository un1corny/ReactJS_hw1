import * as ConstantPosts from '../constants/postConstants';
import merge from 'lodash/merge';

export function postReducer(state = {posts: [], is_loading: false}, action) {
    switch (action.type) {
        case ConstantPosts.GET_POSTS_PENDING: {
            state = {...state, is_loading: true};
            // Object.assign(state, {is_loading: true}) - второй правильный вариант, но более старый
            // state = state.is_loading = true - ошибочное написание, конструкция мутабельная
            break;
        }
        case ConstantPosts.GET_POSTS_FULFILLED: {
            let resultPosts = action.payload.data.slice(0, 3); // удаляем лишние посты, чтобы было удобней
            //Find values that are in result1 but not in result2
            let uniqueResultPost = state.posts.filter(function (obj) {
                return !action.payload.data.some(obj2 => obj.id === obj2.id);
            });
            resultPosts = [...uniqueResultPost, ...resultPosts];
            state = {...state, is_loading: false, posts: resultPosts};
            break;
        }
        case ConstantPosts.GET_POSTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message}; // в промисе всегда есть сообщение об ошибке - забираем его
            break;
        }
        case ConstantPosts.ADD_POST: {
            state = {
                ...state,
                is_loading: false,
                posts: [action.payload, ...state.posts]
            };
            console.log(action.payload);
            console.log(state);
            break;
        }
        case ConstantPosts.DELETE_POSTS: {
            console.log(action.payload);
            // ищем index
            let index = null;
            state.posts.forEach((value, i) => {
                if (parseInt(value.id) === parseInt(action.payload)) {
                    index = i;
                }
            });
            if (index !== null) {
                state = merge({}, state); // новый имутабельный state
                state.posts.splice(index, 1);
                console.log(state);
            }
        }
    }
    return state;
}