import React, {Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Menu Makanan',
            title2: 'Menu Minuman',
            inputValue: 'Hikmal Akbar',
        }
        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    rubahData(){
        this.setState((state, props) => {
            return{
                title: state.title2,
                title2: state.title
            };
        });
    }

    handleChange(e){
        //console.log('Data diubah');
        console.log(e.target.value);
    }

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.rubahData}>Ubah Makanan</button>
                <input type="text" onChange={this.handleChange}/>
            </div>
        );
    };
}
export default Main;