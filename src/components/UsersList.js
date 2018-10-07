import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        // библиотека, которая выполняет аякс запросы

        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                this.setState({users: response.data});
            });
    }
    render() {
        if(!this.state.users.length) {
            return null; // если данные грузятся
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user}/>  // все что было у юзера разобьется на св-ва и пробросится
        });

        return <div>
            <h1>Пользователи</h1>
            {users}
        </div>
    }
}