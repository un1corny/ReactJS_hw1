import React from 'react';
import ElsewhereItems from "./ElsewhereItems";


class Elsewhere extends React.Component {
    render() {

        let items = this.props.items.map((item, index) => {
            return <ElsewhereItems key={index} href={item.href} title={item.title}/>
        });

        return (
            <div className="sidebar-module">
                <h4>{this.props.title}</h4>
                <ol className="list-unstyled">
                    {items}
                </ol>
            </div>
        )
    }
}

export default Elsewhere;