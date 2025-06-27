import React, {Component} from "react";

function Footer(){
    var namaMhs = 'Hikmal Akbar';
    return(
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggubakan function bukan Class</h3>
            <p>Nama Saya : {namaMhs} </p>
        </div>
    );
}

export default Footer;