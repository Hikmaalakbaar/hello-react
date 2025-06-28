import React, {Component} from "react";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state ={
    judul : 'Ini judul dari state',
  };
}
render(){
  return(
    <div>
      <h2>Component dari Class Header</h2>
      <h3>{this.state.judul}</h3>
    </div>
  );
}
}
export default Header;