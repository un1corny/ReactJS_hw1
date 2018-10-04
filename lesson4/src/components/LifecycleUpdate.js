import React from 'react';

export default class LifecycleUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('1. constructor');
    }

    //метод вызывается без создания экземпляра, поэтому статичен

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps');
        return {};

    }

    shouldComponentUpdate() {
        console.log('3. shouldComponentUpdate');

        return true; // если вернуть false, до вызова render не дойдет
    }

    render() {

        console.log('4. render');
        console.log(this.state);

        return <div>
            {this.state.count}
            <button onClick={() => {
                this.setState({count: this.state.count + 1})
            }
            }>Кнопка
            </button>
        </div>

    }

    getSnapshotBeforeUpdate() {
        console.log('5. getSnapshotBeforeUpdate');
        return null;

    }

    componentDidUpdate() {
        console.log('6. componentDidUpdate');

    }
}