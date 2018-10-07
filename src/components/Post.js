import React from 'react';
import {Link} from 'react-router';
import UserInfo from "./UserInfo";


export default class Post extends React.Component {
    render() {
        return <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className="panel-title">
                    <Link to={`/posts/${this.props.id}`}>
                       Автор поста: <UserInfo id={this.props.userId}/>
                    </Link>
                </h3>
            </div>
            <div className="panel-body">
                <p><b>Заголовок:</b> {this.props.title}</p>
                <p><b>Текст поста:</b> {this.props.body}</p>
            </div>
        </div>
    }
}