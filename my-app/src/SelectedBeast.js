import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {

  render(){
    return(
      
      
      <Modal show={this.props.sendFatherApp} onHide={this.props.fatherCloseShow}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.selBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.selBeast.image_url} alt={this.props.selBeast.title}/>
        <p>{this.props.selBeast.title}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.fatherCloseShow}>
          Close
        </Button>
        <Button variant="primary" onClick={this.props.fatherCloseShow}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  
    
  
    );
  }

}


export default SelectedBeast;


