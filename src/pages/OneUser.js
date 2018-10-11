import React from 'react';
import User from '../components/user/User';
import UserService from '../services/UserService';

export default class OneUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentWillMount() {
        UserService.getUserInfo(this.props.params.userId).then((userInfo) => {
            this.setState({user: userInfo})
        });
    }

    render() {
        return <div>
            {/* если первая часть undefined, то вторая часть пока не выполнится: это проверка, что юзеры уже загрузились */}
            {this.state.user && <User {...this.state.user}/>}

        </div>
    }
}