

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {

    render() {
        return (


            <div>
           {/* <h2>{this.props.title}</h2>
           <p>{this.props.id}</p>
           <img src={this.props.img} alt='img'></img> 
           <p>{this.props.description}</p> */}

           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={this.props.img} />
           <Card.Body>
           <Card.Title>{this.props.title}</Card.Title>
           <Card.Text>
          number of pets: 0
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
           </Card>
        </div>
        )

    }
    
}

export default HornedBeast;