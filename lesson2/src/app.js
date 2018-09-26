import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <h1>First React App</h1>
            <p>Hello, React!</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));