import React from 'react';
import UsersList from '../components/user/UsersList';
import {addUser, getUsers, deleteUsers} from '../actions/userAction';
import {connect} from 'react-redux'; // позволяет связать компонент со стором
import AddUserForm from '../components/user/AddUser';
import $ from 'jquery';


class Users extends React.Component {

    componentDidMount() {
        // Action
        this.props.dispatch(getUsers()); // передаем в диспатч, что вернул action

        //добавление поста
        $('body').on('submit', '#addUserForm', (event) => {
            event.preventDefault(); // отменяем действие по умочанию, чтобы не перезагружалась страница

            // данные
            let $userName = $('#userName');
            let $userPhone = $('#userPhone');
            let $siteName = $('#siteName');
            let $userEmail = $('#userEmail');

            let users = addUser($userName.val(), $siteName.val(), $userEmail.val(), $userPhone.val()); // передаем значения
            this.props.dispatch(users);

            $userName.val('');
            $userPhone.val('');
            $siteName.val('');
            $userEmail.val('');
        });

        // удаление
        $('body').on('click', 'a.user_del', (event) => {
            event.preventDefault();
            let idUser = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deleteUsers(idUser));
        });
    }

    componentWillUnmount() {
        $('body').off();
    }

    render() {
        if (this.props.is_loading) {
            return <div>
                Данные загружаются
            </div>
        }
        return <div>
            <AddUserForm/>
            <UsersList users={this.props.users}/>

        </div>
    }
}

function mapStateToProps(store) {
    return {
        users: store.users.users, // забираем имя стора из combineReducers, и берем из редьюсера свойства объекта стор
        is_loading: store.users.is_loading
    }

}

export default connect(mapStateToProps)(Users); // возвращается функция, которую мы сразу вызываем для постов