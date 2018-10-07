import React from 'react';
import UsersList from '../components/UsersList';
import UserStore from '../stores/UserStore';
import {addUser, getUser} from '../actions/userAction';

export default class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        // bind
        this.newUser = this.newUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser() {
        let id = 1;
        let name = 'name';
        let username = 'username';
        let email = 'email';
        let phone = 'phone';

        // Action
        addUser(id, name, username, email, phone)
    }

    // метод, который будет обновлять состояние. будем его подписывать на событие стора
    onUserChange(users) {
        this.setState({users});
    }

    // когда сформирует дом-дерево, мы вызовем action
    componentDidMount() {
        // Action
        getUser();
    }

    // подписаться на изменение состояния
    componentWillMount() {
        UserStore.on('change', this.onUserChange)
    }

    render() {
        return <div>
            <button className='btn btn-primary' onClick={this.newUser}>Добавить юзера</button>
            <UsersList users={this.state.users}/>
        </div>

    }
}