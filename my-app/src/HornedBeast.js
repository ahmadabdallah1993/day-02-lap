

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './style.css';
import Col from 'react-bootstrap/Col';
import SelectedBeast from "./SelectedBeast";




class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfPets : 0,
            numOfTunas : 0,
            numOfClick : 0
        }
    }


    incrementNumOfPets = () => {
        this.setState({
                numOfPets : this.state.numOfPets +1
            })
    }

    iNeedTuna = () => {
        // alert("hi from iNeedTuna")

        this.setState({
            numOfTunas : this.state.numOfTunas +1
        })

        this.props.decrementTotal();
    }



    render() {
        return (


            <div >
           {/* <h2>{this.props.title}</h2>
           <p>{this.props.id}</p>
           <img src={this.props.img} alt='img'></img> 
           <p>{this.props.description}</p> */}

           {/* <h1>total click = {this.state.numOfClick} </h1> */}

           {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">modal</button> */}


           {/* <SelectedBeast/> */}
         {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          for full Description 
         </button> */}
         
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
<SelectedBeast />
        <Col >
          

           <Card style={{ width: '22rem'}}>
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
          </Card.Body>
           </Card>
           </Col>
        
        </div>
        )

    }
    
}

export default HornedBeast;