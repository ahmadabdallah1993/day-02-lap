import React from 'react';

import Header from './header';
import Main from './main';
import Fotter from './Fotter';
import Data from './Data.json';


import SelectedBeast from './SelectedBeast';




class App extends React.Component {

constructor(props){
  super(props);

  this.state = {
    selBeast:{},
    show:false
  }
}

fatherApp = (title) => {

  const SelectedBeast = Data.find(beast => beast.title === title)
  this.setState({
    
    show: true,
    selBeast:SelectedBeast
  })
}

fatherAppCloseShow = () => {
  this.setState ({
    show: false
  })
}

  

  render() {
    return(
      <div>

        <Header />
        <Main sendingData={Data} sendFatherApp = {this.fatherApp}/>
        
        
        <Fotter />
        <SelectedBeast sendFatherApp={this.state.show} fatherCloseShow={this.fatherAppCloseShow} selBeast={this.state.selBeast}/>
      
      </div>

    )
  }
}

export default App;
