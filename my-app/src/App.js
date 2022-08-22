import React from 'react';
// import ReactDOM from "react-dom";
import Header from './header';
import Main from './main';
import Fotter from './Fotter';


class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <Main />
        <Fotter />
      
      </div>

    )
  }
}

export default App;
// const rootElement = document.getElementById("root");
//  ReactDOM.render(<App />, rootElement);