import React from 'react';

export default class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: props.items
        };
        //bind для подвязки this навсегда
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        // console.log(this.refs.nameUser.value)
        let userName = this.refs.nameUser.value;

        if(userName.length < 3) {
            alert('Имя должно включать хотя бы 3 знака');
            return false;
        }
        let users = [...this.state.users, userName];
        this.setState({users});
        this.refs.nameUser.value = ""; //очищаем поле

    }

    render() {

        let users = this.state.users.map((user, index) => {
            return <li key={index}>{user}</li>
        });

        return <div>
            <ul>
                {users}
            </ul>
            <hr/>
            <label>
                Введите имя пользователя: <input ref='nameUser' type='text' placeholder='Имя'/>
            </label>
            <button onClick={this.addUser}>Добавить пользвателя</button>
        </div>

    }
}