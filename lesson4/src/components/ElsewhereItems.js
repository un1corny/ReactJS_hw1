import React from 'react';


class ElsewhereItems extends React.Component {
    render() {

        return (
            <li><a href={this.props.href}>{this.props.title}</a></li>
        )
    }
}

export default ElsewhereItems;

