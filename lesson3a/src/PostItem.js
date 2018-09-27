import React from 'react';

class PostItem extends React.Component {
    render() {
        let {title, author, text} = this.props.data; // {title: "Home", author: "/", text: 'some text'}

        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{title}</h2>
                <p className="blog-post-meta">{author}</p>
                <p>{text}</p>
            </div>
        )
    }
}

export default PostItem;