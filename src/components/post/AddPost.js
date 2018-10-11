import React from 'react';

export default class AddPost extends React.Component {
    render() {
        return <div>
            <h2>Форма для добавления поста</h2>
            <form action='#' id='addPostForm'>
                <div className="form-group">
                    <label htmlFor="isUser">Id пользователя</label>
                    <input type="text" className='form-control' id='idUser' placeholder='1' defaultValue={1}/>
                </div>
                <div className="form-group">
                    <label htmlFor="postTitle">Заголовок</label>
                    <input type="text" className='form-control' id='postTitle' placeholder='post header' defaultValue={'post totle'}/>
                </div>
                <div className="form-group">
                    <label htmlFor="postText">Текст поста</label>
                    <input type="text" className='form-control' id='postText' placeholder='your post' defaultValue={'post text'}/>
                </div>
                <button className='btn btn-primary' type='submit'>Add Post
                </button>
            </form>
        </div>
    }

}