import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';


class App extends Component{
  render(){
    return(
      <div>
        <Header list='10 Daftar Makanan'/>
        <Top/>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' namaKampus='STIKOM POLTEK'/>
      </div>
    );
  }
}

export default App;
