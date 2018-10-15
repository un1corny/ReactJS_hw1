import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
    render() {
        return <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/users/${this.props.userId}`}>
                        {this.props.title}
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p><b>Текст поста:</b> {this.props.body}</p>
                <a href='#' className='post_del' data-id={this.props.id}>Delete post</a>
            </div>
        </div>
    }
}