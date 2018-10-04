import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory }  from 'react-router'; // обертка, маршрут, роут по умолчанию (главная стр.), история браузера
import Layout from './Layout';
import Main from '../pages/Main';
import About from './About';
import Contacts from './Contacts';
import PageNotFound from '../pages/PageNotFound';


class App extends React.Component {

    render() {
        return <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                {/* путь совпадает с нужной нам главной */}
                <IndexRoute component={Main}/>
                <Route path='about' component={About}/>
                <Route path='contacts' component={Contacts}/>
                {/* number будет выхвачено автоматически и попадет в contacts в this.props.params со значением 5 */}
                <Route path='contacts/:number' component={Contacts}/>
                {/* правило со звездочкой идет последним, оно для несущ. страницы, если другие не сработали */}
                <Route path='*' component={PageNotFound}/>
            </Route>
        </Router>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));