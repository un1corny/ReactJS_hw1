import React from 'react';

export default class AddUser extends React.Component {
    render() {
        return <div>
            <h2>Форма для добавления пользователя</h2>
            <form action='#' id='addUserForm'>
                {/*<div className="form-group">*/}
                    {/*<label htmlFor="idOfUser">Id пользователя</label>*/}
                    {/*<input type="text" className='form-control' id='idOfUser' placeholder='1'/>*/}
                {/*</div>*/}
                <div className="form-group">
                    <label htmlFor="userName">Имя пользователя</label>
                    <input type="text" className='form-control' id='userName' placeholder='name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="siteName">Имя для сайта</label>
                    <input type="text" className='form-control' id='siteName' placeholder='your site name'/>
                </div>
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label>
                    <input type="text" className='form-control' id='userEmail' placeholder='your email'/>
                </div>
                <div className="form-group">
                    <label htmlFor="userPhone">Телефон</label>
                    <input type="text" className='form-control' id='userPhone' placeholder='your phone'/>
                </div>
                <button className='btn btn-primary' type='submit'>Add User
                </button>
            </form>
        </div>
    }

}