import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {

    render() {

        return <div className='container'>
            <div className="row">
                <div className='col-xs-4'>
                    <ul>
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                        <li><Link to='/contacts/5'>Контакты five</Link></li>
                        <li><Link to='/pagenotfount'>Несуществующая страница</Link></li>
                    </ul>
                </div>
                <div className='col-xs-8'>
                    {/* попадает из роутинга */}
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}