import React from 'react';
import PostItem from "./PostItem";


class PostsList extends React.Component {
    render() {

        // 1. for
        // 2. map
        let items = this.props.items.map((item, index) => {
            return <PostItem key={index} data={item}/>
        });

        return (
            <div>
                {
                    this.props.title ?
                        <div className="blog-header">
                            <h1 className="blog-title">{this.props.title}</h1>
                        </div> : ''
                }

                <div className="col-sm-8 blog-main">
                    {items}
                </div>
            </div>)
    }
}

export default PostsList;