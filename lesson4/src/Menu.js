import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';


class Menu extends React.Component {
    render() {

        // 1. for
        // 2. map
        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index}>{item.title}</MenuItem>
        });

        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        {items}
                    </nav>
                </div>
            </div>)
    }
}

Menu.defaultProps = {
    titleMenu: "Меню по умолчанию",
    items: []
};

Menu.propTypes = {
    titleMenu: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired

};

export default Menu;