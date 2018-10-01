import React from 'react';

export default class DisplayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
    }
    }


    render() {
        let newsBlock;

        if(this.state.display) {
            newsBlock = <div>
                <h3>Новости</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur at, autem beatae
                    deserunt dolore dolorem eaque est illo illum magni odit possimus qui repudiandae, sint tempora
                    ullam voluptate voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consequatur debitis dicta
                    distinctio eos et ex exercitationem expedita explicabo fuga fugiat, hic porro quaerat quo sed
                    sunt suscipit ullam.</p>
            </div>;
        }


        return <div>
                <h2 className='link' onClick={() => {
                this.setState({display: !this.state.display});
                } }>Скрыть\показать блок</h2>
            {newsBlock}

            </div>
        }
}