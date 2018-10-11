import React from 'react';
import PostsList from '../components/post/PostsList';
import {addPost, getPosts, deletePost} from '../actions/postActions';
import {connect} from 'react-redux'; // позволяет связать компонент со стором
import FormPost from '../components/post/AddPost';
import $ from 'jquery';


class Posts extends React.Component {

    componentDidMount() {
        // Action
        this.props.dispatch(getPosts()); // передаем в диспатч, что вернул action

        //добавление поста
        $('body').on('submit', '#addPostForm', (event) => {
            event.preventDefault(); // отменяем действие по умочанию, чтобы не перезагружалась страница

            // данные
            let $userId = $('#idUser');
            let $postTitle = $('#postTitle');
            let $postText = $('#postText');

            let posts = addPost($postTitle.val(), $userId.val(), $postText.val()); // передаем значения
            this.props.dispatch(posts);

            $postTitle.val('');
            $userId.val('');
            $postText.val('');
        });

        // удаление
        $('body').on('click', 'a.post_del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
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
            <FormPost/>
            <PostsList posts={this.props.posts}/>
        </div>
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts, // забираем имя стора из combineReducers, и берем из редьюсера свойства объекта стор
        is_loading: store.posts.is_loading
    }

}

export default connect(mapStateToProps)(Posts); // возвращается функция, которую мы сразу вызываем для постов