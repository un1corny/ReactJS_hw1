import * as ConstantUsers from '../constants/usersConstants';
import merge from 'lodash/merge';

export function userReducer(state = {users: [], is_loading: false}, action) {
    switch (action.type) {
        case ConstantUsers.GET_USERS_PENDING: {
            state = {...state, is_loading: true};
            break;
        }
        case ConstantUsers.GET_USERS_FULFILLED: {
            let resultUsers = action.payload.data.slice(0, 3); // удаляем лишних пользователей, чтобы было удобней
            let uniqueResultUser = state.users.filter(function (obj) {
                return !action.payload.data.some(obj2 => obj.id === obj2.id);
            });
            resultUsers = [...uniqueResultUser, ...resultUsers];
            state = {...state, is_loading: false, users: resultUsers};
            break;
        }
        case ConstantUsers.GET_USERS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message}; // в промисе всегда есть сообщение об ошибке - забираем его
            break;
        }
        case ConstantUsers.ADD_USER: {
            state = {
                ...state,
                is_loading: false,
                users: [action.payload, ...state.users]
            };
            break;
        }
        case ConstantUsers.DELETE_USERS: {
            let index = null;
            state.users.forEach((value, i) => {
                if (parseInt(value.id) === parseInt(action.payload)) {
                    index = i;
                }
            });
            if (index !== null) {
                state = merge({}, state); // новый имутабельный стейт
                state.users.splice(index, 1);
                console.log(state);
            }
        }
    }
    return state;
}