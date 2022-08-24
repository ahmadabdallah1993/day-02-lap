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

  const SBeast = Data.find(beast => beast.title === title)
  this.setState({
    show: true,
    selBeast: SBeast
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
        <SelectedBeast showModel={this.state.show} fatherCloseShow={this.fatherAppCloseShow} sb={this.state.selBeast}/>
      
      </div>

    )
  }
}

export default App;
