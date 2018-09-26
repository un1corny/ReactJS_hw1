import React from 'react';
import ReactDOM from 'react-dom';


//ES6, var1

class App extends React.Component {
    render () {
        return (
        <div>
            <h1>First React App</h1>
        </div>
    )
    }
}

ReactDOM.render (<App/>, document.getElementById('root'));