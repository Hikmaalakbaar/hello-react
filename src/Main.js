import React, {Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Menu Makanan',
            title2: 'Menu Minuman',
        }
        this.rubahData = this.rubahData.bind(this);
    }
    rubahData(){
        this.setState((state, props) => {
            return{
                title: state.title2,
                title2: state.title
            };
        });
    }
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.rubahData}>Ubah Makanan</button>
            </div>
        );
    };
}
export default Main;