import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

class MyBottomBar extends Component{
  send_email(){
    console.log("send email")
  }

  render(){
    return ( 
      <Navbar variant="light" bg="light" fixed="bottom">
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Comprar</Nav.Link>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyBottomBar