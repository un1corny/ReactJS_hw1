import React from 'react';

export default class Contacts extends React.Component {

    render() {

        console.log(this)
        return <div>
            <h1>Контакты</h1>
            <p>email: fff@gg.ru</p>
            <p>tel: 888-88-88</p>
            <p>{this.props.params.number}</p>
        </div>
    }
}