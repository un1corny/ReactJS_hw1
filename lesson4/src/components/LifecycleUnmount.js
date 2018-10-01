import React from 'react';

export default class LifecycleUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        console.log('1. constructor');
    }

    myTimer() {
        this.setState({
            date: new Date
        })
    }


    render() {

        console.log('2. render');
        console.log(this.state);

        return <div>
            Дата: {this.state.date.toLocaleDateString()}
        </div>

    }

    componentDidMount() {
        console.log('3. componentDidMount');
        this.timerId = setInterval(()=>this.myTimer(), 1000);

    }

    componentWillUnmount() {
        console.log('4. componentWillUnmount'); //не запустится

        //удаляем таймер
        clearInterval(this.timerId)
    }
}