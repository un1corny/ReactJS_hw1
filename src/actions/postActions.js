import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS} from '../constants/postConstants';
import axios from 'axios';

export function addPost(title, userId, body) {
    dispatcher.dispatch({
        type: ADD_POST,  // передаем тип действия, т.е. какая функция должна вызваться в сторе
        payload: {title, userId, body} // добавляем, если есть какие-нибудь данные
    });
}

export function getPosts() {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                payload: response.data
            });
        })
}