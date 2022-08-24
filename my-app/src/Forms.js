import React from 'react';
import {Form, Button} from 'react-bootstrap';
import App from './App';






class Forms extends React.Component {


  constructor(props){
    super(props);
  
    this.state = {
      numHorn: '',
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  
  this.setState({
    numHorn: Number(e.target.numOfHorns.value),
    
  })
  this.props.sendIt(this.numHorn);
    
  }

  // onChange={this.handleChange}
    render() {
        return(
            <Form onSubmit={this.handleSubmit} >
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="numOfHorns"><h2>Select Numbers Of Horns:</h2></Form.Label>
          <Form.Select id="numOfHorns">
            <option value='1'>One Horns</option>
            <option value= '2'>two Horns</option>
            <option value='3'>three Horns</option>
            <option value= '4'>four Horns</option>
            <option value='5'>five or more Horns</option>
          </Form.Select>
        </Form.Group>
        
        <Button type="submit" >Submit</Button>
      
    </Form>

        )
    }
}

export default Forms;