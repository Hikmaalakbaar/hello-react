import React, {Component} from "react";

const Footer = function(props){
    return(
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function bukan Class</h3>
            <p> {props.judul} </p>
            <p>Design By @{props.namaKampus} </p>
        </div>
    );
}

export default Footer;