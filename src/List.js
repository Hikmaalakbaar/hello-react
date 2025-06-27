import React, {Component} from "react";
import Image from "./Image";

class List extends Component{
    render(){
        return(
            <div>
                <Image/>
                <ol>
                    <li>Satu</li>
                    <li>Dua</li>
                    <li>Tiga</li>
                </ol>
            </div>
        );
    }
}
export default List;