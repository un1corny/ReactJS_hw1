import React from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends React.Component {

    render() {
        if (!this.props.users.length) {
            return null; // если данные грузятся
        }

        let users = this.props.users.map((user, index) => {
            return <User key={index} {...user}/>  // все что было у юзера разобьется на св-ва и пробросится
        });

        return <div>
            <h1>Пользователи</h1>
            {users}
        </div>
    }
}