import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

export default class HelloModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    componentDidMount() {
        this.open();
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){
        return <Modal show={this.state.showModal} onHide={() => this.close()}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to our Blog!</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={() => this.close()}>Close</Button>
            </Modal.Footer>
        </Modal>
    }
}




