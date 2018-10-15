import {ADD_USER, GET_USERS, DELETE_USERS} from '../constants/usersConstants';
import axios from 'axios';

export function addUser(name, username, email, phone) {
    const id = Math.floor(Math.random() * 10) + 11;
    return {
        type: ADD_USER,
        payload: {id, name, username, email, phone},
    };
}

export function getUsers() {
    return {
        type: GET_USERS,
        payload: axios.get(`https://jsonplaceholder.typicode.com/users`)
    };
}

export function deleteUsers(idUser) {
    return {
        type: DELETE_USERS,
        payload: idUser
    };
}