import { Component } from 'react';
import logo from './logo.svg';

class Header extends Component{
  render(){
    return(
      <div>
        <h2>Makanan Khas Indonesia</h2>
      </div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <header/>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
