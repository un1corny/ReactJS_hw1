import React from 'react';
import PostsList from '../components/PostsList';
import PostStore from '../stores/postStore';
import {addPost, getPosts} from '../actions/postActions'

export default class Posts extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            title: '',
            posts: []
        };

        // bind
        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);

    }

    newPost() {
        let body = 'Текст нового поста';
        let userId = 1;
        // let title = 'Мой пост';

        // Action
        addPost(this.state.title, userId, body);
        return false;
    }

    handleTitleChange(title) {
        this.setState({title: title})
    }

    // метод, который будет обновлять состояние. будем его подписывать на событие стора

    onPostChange(posts) {
        this.setState({posts});
    }

    // когда сформирует дом-дерево, мы вызовем action

    componentDidMount() {
        // Action
        getPosts();
    }

    // подписаться на изменение состояния

    componentWillMount() {
        PostStore.on('change', this.onPostChange)
    }

    render() {
        return <div>
            <form>
                <input type="text" name="title" placeholder="title" value={this.state.title}
                       onChange={(event) => this.handleTitleChange(event.target.value)}/>
                <button className='btn btn-primary' type={'button'} onClick={() => this.newPost()}>Добавить пост
                </button>
            </form>

            <PostsList posts={this.state.posts}/>
        </div>

    }
}