import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {

    render() {
        if (!this.props.posts.length) {
            return null;
        }
        let posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post}/>
        });

        return <div>
            <h1>Посты блога</h1>
            <div className="panel panel-default">
                {posts}
            </div>
        </div>
    }
}