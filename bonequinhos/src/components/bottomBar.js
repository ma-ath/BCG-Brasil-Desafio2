import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

class MyBottomBar extends Component{
  render(){
    return ( 
      <Navbar variant="light" bg="light" fixed="bottom">
        <Navbar.Text>Total: </Navbar.Text>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Comprar</Nav.Link>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyBottomBar