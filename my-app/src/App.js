import React from 'react';

import Header from './header';
import Main from './main';
import Fotter from './Fotter';
import Data from './Data.json';


import SelectedBeast from './SelectedBeast';
import Forms from './Forms';




class App extends React.Component {

constructor(props){
  super(props);

  this.state = {
    selBeast:{},
    show:false,
    d: Data
  }
}

fatherApp = (title) => {

  const SBeast = Data.find(beast => beast.title === title)
  this.setState({
    show: true,
    selBeast: SBeast,
    
  })
}

fatherAppCloseShow = () => {
  this.setState ({
    show: false
  })
}

calculateHorns = (num2) => {

let num = Number(num2);
let e = Data;

// if(num === 5){
//   num = Data.horns;
// }

  let cal = e.filter( (item) => {
    return item.horns === num})

    // console.log(cal)

  this.setState({
    d: cal
  })
}

  

  render() {
    return(
      <div>

        <Header />
        <Forms sendIt={this.calculateHorns}/>
        {/* {data}this.state.d */}
        <Main sendingData={this.state.d} sendFatherApp = {this.fatherApp}/>
        <SelectedBeast showModel={this.state.show} fatherCloseShow={this.fatherAppCloseShow} sb={this.state.selBeast}/>
        
        <Fotter />
        
      
      </div>

    )
  }
}

export default App;
