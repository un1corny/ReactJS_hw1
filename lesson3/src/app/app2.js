import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

// React.createClass var2

const App = createReactClass (
    {
        render() {
            return <div>Syntax 2</div>
        }
    }
);


ReactDOM.render (<App/>, document.getElementById('root'));