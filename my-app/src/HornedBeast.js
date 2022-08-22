

import React from "react";



class HornedBeast extends React.Component {

    render() {
        return (
            <div>
           <h2>{this.props.title}</h2>
           <p>{this.props.id}</p>
           <img src={this.props.img} alt='img'></img> 
           <p>{this.props.description}</p>
        </div>
        )

    }
    
}

export default HornedBeast;