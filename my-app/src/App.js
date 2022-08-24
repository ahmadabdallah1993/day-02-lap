import React from 'react';
// import ReactDOM from "react-dom";
import Header from './header';
import Main from './main';
import Fotter from './Fotter';
// import './style.css';
import Data from './Data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {

  constructor(props){
    super(props);

  this.state = {
    pressCard : 0
  }

  }

  pr = () => {
    this.setState({
      pressCard : this.state.pressCard +1
    })
  }

  render() {
    return(
      <div>


        
        {/* <SelectedBeast /> */}
        <Header />
        <h2>father app = {this.state.pressCard}</h2>
        <Main sendingData={Data} pa = {this.pr}/>
        <Fotter />
      
      </div>

    )
  }
}

export default App;
// const rootElement = document.getElementById("root");
//  ReactDOM.render(<App />, rootElement);