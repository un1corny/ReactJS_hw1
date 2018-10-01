import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {

    render() {

        console.log(this.state);
        return <a className="blog-nav-item" target="_blank" href={this.props.href}>{this.props.children}</a>

    }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
    children: "Главная страница по умолчанию",
    href: "/"
};

export default MenuItem;