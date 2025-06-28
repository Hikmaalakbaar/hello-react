import React, {Component} from "react";

class Header extends Component{
  //state
  constructor(props) {
    super(props);
    this.state ={
    judul : 'Ini judul dari state',
    dataMakanan: this.props.list,
    statusRendering: true
  };
  this.handlePesan = this.handlePesan.bind(this);
}
//function
  handlePesan(pesan, e) {
    e.preventDefault();
    alert(pesan);
    alert('Hai');
  };
render(){
  return(
    <div>
      <h2>Component dari Class Header</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses props dari App secara langsung: {this.props.list} </p>
      <p>Mangakses props dari State: {this.state.dataMakanan} </p>
      <a href="/" onClick={(e)=>this.handlePesan('Pesan dari Parameter', e)}>Halaman Header</a>
    </div>
  );
}
}
export default Header;