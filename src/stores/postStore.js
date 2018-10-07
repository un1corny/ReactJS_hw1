import {ADD_POST, GET_POSTS} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter {
    constructor() {
        // props нет потому что это не компонент
        super(...arguments);
        //  для постов
        this.posts = [];

        // bind
        this.getPostsEnd = this.getPostsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    // когда данные уже получили и их нужно присвоить в массив и вызвать событие change
    getPostsEnd(posts) {
        this.posts = posts;
        this.change(); // для уведомления подписанных компонентов
    }

    change() {

        // emit метод EventEmitter
        this.emit('change', this.posts)
    }

    addPost(post) {
        this.posts.push(post);
        this.change(); //чтобы компонент перерисовался
    }

    //центральный метод, который знает, когда вызывать функции
    handleActions(action) {
        switch (action.type) {
            case ADD_POST: {
                this.addPost(action.payload);
                break;
            }
            case GET_POSTS: {
                this.getPostsEnd(action.payload);
                break;
            }
        }

    }
}

// чтобы обработчик handleActions участвовал в диспетчере

const store = new postStore;
dispatcher.register(store.handleActions);
export default store;