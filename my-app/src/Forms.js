import React from 'react';
import {Form, Button} from 'react-bootstrap';






class Forms extends React.Component {


  constructor(props){
    super(props);
  
    this.state = {
      numHorn: '',
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  
  this.setState({
    numHorn: this.target.numOfHorns.value
    
    
  })
  this.props.sendIt(this.numHorn)
    
  }


    render() {
        return(
            <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="numOfHorns"><h2>Select Numbers Of Horns:</h2></Form.Label>
          <Form.Select id="numOfHorns">
            <option value='one'>One Horns</option>
            <option value= 'two'>two Horns</option>
            <option value='three'>three Horns</option>
            <option value= 'four'>four Horns</option>
            <option value='five'>five or more Horns</option>
          </Form.Select>
        </Form.Group>
        
        <Button type="submit" >Submit</Button>
      
    </Form>

        )
    }
}

export default Forms;