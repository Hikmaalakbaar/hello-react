import React, {Component} from "react";

class Header extends Component{
  //state
  constructor(props) {
    super(props);
    this.state ={
    judul : 'Ini judul dari state',
    dataMakanan: this.props.list,
  };
  this.handlePesan = this.handlePesan.bind(this);
}
//function
  handlePesan() {
    alert(this.state.judul);
  };
render(){
  return(
    <div>
      <h2>Component dari Class Header</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses props dari App secara langsung: {this.props.list} </p>
      <p>Mangakses props dari State: {this.state.dataMakanan} </p>
      <a href="/" onClick={this.handlePesan}>Halaman Header</a>
    </div>
  );
}
}
export default Header;