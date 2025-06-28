import React, {Component} from "react";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state ={
    judul : 'Ini judul dari state',
    dataMakanan: this.props.list,
  };
}
render(){
  return(
    <div>
      <h2>Component dari Class Header</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses props dari App secara langsung: {this.props.list} </p>
      <p>Mangakses props dari State: {this.state.dataMakanan} </p>
    </div>
  );
}
}
export default Header;