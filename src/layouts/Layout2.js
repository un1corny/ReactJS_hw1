import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';


export default class Layout2 extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'React Blog'; // т.к бренд не изменяющееся сво-во, его не нужно вносить в состояния
    }

    isActive(href) {
        // сравниваем ссылку выбранной страницы с активной через метод location, который имеет сво-во pathname (путь)
        return window.location.pathname === href;
    }

    render() {

        return <div>
            <Menu brand={this.brand}>
                <MenuItem href='/' active={this.isActive('/')}>Главная</MenuItem>
                <MenuItem href='/users' active={this.isActive('/users')}>Пользователи</MenuItem>
                <MenuItem href='/posts' active={this.isActive('/posts')}>Посты блога</MenuItem>
            </Menu>

            <div className='container'>
                <div className="row">
                    <div className='col-xs-12'>
                        {this.props.children}
                    </div>
                </div>
            </div>
            <footer>
                <hr/>
                &copy; 2018
            </footer>
        </div>
    }
}