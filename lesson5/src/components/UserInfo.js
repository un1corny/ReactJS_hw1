import React from 'react';
import UserService from "../services/UserService";

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {name: null}
        };

        UserService.getUserInfo(this.props.id).then((userInfo) => {
            this.setState({userInfo: userInfo})
        });
    }
    render() {
        return this.state.userInfo.name
    }
}