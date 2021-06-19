import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';

class MyNavbar extends Component{
  render(){
    return ( 
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Bonequinhos!</Navbar.Brand>
        </Navbar>
    );
  }
}

export default MyNavbar