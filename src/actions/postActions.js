import {ADD_POST, GET_POSTS, DELETE_POSTS} from '../constants/postConstants';
import axios from 'axios';

export function addPost(title, userId, body) {
    const id = Math.floor(Math.random() * 200) + 100;
    return {
        type: ADD_POST,
        payload: {id, title, userId, body}
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get(`https://jsonplaceholder.typicode.com/posts`) // т.к. это не данные, а целиком промис, то сработает apply.middleware, который обработает результат
    };
}

export function deletePost(idPost) {
    return {
        type: DELETE_POSTS,
        payload: idPost
    };
}