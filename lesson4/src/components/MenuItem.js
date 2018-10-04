import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuItem extends React.Component {

    render() {
        // в зависимости от значения св-ва isActive добавляется класс active
        let btnClass = classNames({
            'blog-nav-item': true,
            'active': this.props.isActive
        });

        // функция-обработчик срабатывает по клику на вкладку меню
        // вызывается callback-функция onItemClick

        return <a onClick={() => {this.props.onItemClick();}}
                  className={btnClass}
                  href={this.props.href}>
                {this.props.children}
            </a>
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