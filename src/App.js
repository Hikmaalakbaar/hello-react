import { Component } from 'react';
import Header from './Header';

const Footer = function(){
  return(
    <div>
      <h3>Halaman Footer</h3>
      <h3>Component ini dibuat menggunakan function bukan class</h3>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h1>Component dari Class App</h1>
        <Footer/>
      </div>
    );
  }
}

export default App;
