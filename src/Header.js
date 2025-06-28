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
      {this.state.statusRendering === true ? (
        <div>
          <h1>Selamat Datang</h1>
          <h2>Hai Hikmal Akbar</h2>
          </div>
          ) : (
          <div>
            <h1>Selamat Tinggal</h1>
            <h2>Semoga Bertemu Kembali</h2>
            </div>
          )
          }
    </div>
  );
}
}
export default Header;