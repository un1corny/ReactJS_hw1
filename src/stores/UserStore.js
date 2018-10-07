import {ADD_USER, GET_USER} from '../constants/usersConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class userStore extends EventEmitter {
    constructor() {
        // props нет потому что это не компонент
        super(...arguments);
        //  для постов
        this.users = [];

        // bind
        this.getUsersEnd = this.getUsersEnd.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    // когда данные уже получили и их нужно присвоить в массив и вызвать событие change
    getUsersEnd(users) {
        this.users = users;
        this.change(); // для уведомления подписанных компонентов
    }

    change() {
        // emit метод EventEmitter
        this.emit('change', this.users)
    }

    addUser(user) {
        this.users.push(user);
        this.change(); //чтобы компонент перерисовался
    }

    //центральный метод, который знает, когда вызывать функции
    handleActions(action) {
        switch (action.type) {
            case ADD_USER: {
                this.addUser(action.payload);
                break;
            }
            case GET_USER: {
                this.getUsersEnd(action.payload);
                break;
            }
        }
    }
}

// чтобы обработчик handleActions участвовал в диспетчере

const store = new userStore;
dispatcher.register(store.handleActions);
export default store;