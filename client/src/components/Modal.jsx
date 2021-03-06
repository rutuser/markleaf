import * as React from 'react';
import { Modal } from 'react-bootstrap';



class ModalContainer extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: true
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Markleaf</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Welcome to Markleaf</h3>
              <p>Here we are to find your car when You run out of memory!</p>
              <p>Click in the "Help / Info" section to read more about the methods / funcionality
                  of the page.
              </p>
              <br/>
              <p>Happy parking!</p>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }


export default ModalContainer;