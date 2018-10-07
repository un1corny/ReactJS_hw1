import React from 'react';
import axios from "axios/index";
import Post from '../components/Post';

export default class OnePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then((response) => {
                this.setState({post: response.data});
            });
    }
    render() {
        return <div>
            {this.state.post && <Post {...this.state.post}/>}
        </div>
    }
};