import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {

  render(){
    return(
      
      
      <Modal show={this.props.showModel} onHide={this.props.fatherCloseShow}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.sb.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.sb.image_url} alt={this.props.sb.title}/>
        <p>{this.props.sb.title}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.fatherCloseShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  
    
  
    );
  }

}


export default SelectedBeast;


