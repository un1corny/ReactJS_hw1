import dispatcher from '../dispatcher';
import axios from 'axios';
import {ADD_USER, GET_USER} from "../constants/usersConstants";

export function addUser(id, name, username, email, phone) {
    dispatcher.dispatch({
        type: ADD_USER,  // передаем тип действия, т.е. какая функция должна вызваться в сторе
        payload: {id, name, username, email, phone} // добавляем, если есть какие-нибудь данные
    });
}

export function getUser() {
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            dispatcher.dispatch({
                type: GET_USER,
                payload: response.data
            });
        })
}