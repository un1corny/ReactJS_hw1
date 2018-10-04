import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory }  from 'react-router';
import Layout from './layouts/Layout2';
import Main from './pages/Main';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import OneUser from './pages/OneUser';
import Posts from './pages/Posts';
import OnePost from './pages/OnePost';




class App extends React.Component {

    render() {
        return <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={Main}/>
                <Route path='users' component={Users}>
                    {/* Users теперь шаблон для вложенного роута с параметром */}
                    <Route path=':userId' component={OneUser}/>
                </Route>
                <Route path='posts' component={Posts}>
                    <Route path=':postId' component={OnePost}/>
                </Route>
                <Route path='*' component={PageNotFound}/>
            </Route>
        </Router>
    }
}

ReactDOM.render(<App/>, document.getElementById('app2'));