import React from 'react';

export default class LifecycleMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        console.log('1. constructor');
    }

    //метод вызывается без создания экземпляра, поэтому статичен

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps');
        return {
            test: []
        };

    }

    render() {

        console.log('3. render');
        console.log(this.state);

        return <div>
            LifecycleMount
        </div>

    }

    componentDidMount() {
        console.log('4. componentDidMount');

    }
}