

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './style.css';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';




class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfPets : 0,
            numOfTunas : 0,
        }
    }


    incrementNumOfPets = () => {
        this.setState({
                numOfPets : this.state.numOfPets +1
            })
    }

    iNeedTuna = () => {

        this.setState({
            numOfTunas : this.state.numOfTunas +1
        })

        this.props.decrementTotal();
    }



    render() {
        return (


            <div >
          

        <Col >
          

           <Card style={{ width: '22rem'}}>
          
           <Button variant="primary" onClick={this.props.sendFatherApp(this.props.title)}>
        Launch static backdrop modal
      </Button>
           <Card.Img variant="top" src={this.props.img} onClick= {this.incrementNumOfPets} />
           <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>
          number of pets 🐱: {this.state.numOfPets}
          </Card.Text>
          <Card.Text>
          num of tunas 🐟: {this.state.numOfTunas}
          </Card.Text>
          <button variant="primary" onClick={this.iNeedTuna}>I Need Tuna:</button>
          {/* <br></br> */}
          
          </Card.Body>
           </Card>
           </Col>
        
        </div>
        )

    }
    
}

export default HornedBeast;