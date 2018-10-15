import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Layout from './layouts/Layout2';
import Main from './pages/Main';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import OneUser from './pages/OneUser';
import Posts from './pages/Posts';

// связка redux - react
import {Provider} from 'react-redux';
import store from './store';


class App extends React.Component {

    render() {
        return <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Main}/>
                    <Route path='users' component={Users}>
                    </Route>
                    <Route path='users/:userId' component={OneUser}/>
                    <Route path='posts' component={Posts}>
                    </Route>
                    <Route path='*' component={PageNotFound}/>
                </Route>
            </Router>
        </Provider>
    }
}

ReactDOM.render(<App/>, document.getElementById('app2'));