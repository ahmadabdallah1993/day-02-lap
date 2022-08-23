

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import Col from 'react-bootstrap/Col';




class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfPets : 0,
        }
    }


    incrementNumOfPets = () => {
        this.setState({
                numOfPets : this.state.numOfPets +1
            })
    }



    render() {
        return (


            <div >
           {/* <h2>{this.props.title}</h2>
           <p>{this.props.id}</p>
           <img src={this.props.img} alt='img'></img> 
           <p>{this.props.description}</p> */}
          
        <Col>
          <Card></Card>

           <Card style={{ width: '25rem'}}>
           <Card.Img variant="top" src={this.props.img} onClick= {this.incrementNumOfPets} />
           <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>
          number of pets: {this.state.numOfPets}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
           </Card>
           </Col>
        
        </div>
        )

    }
    
}

export default HornedBeast;