import React, {Component} from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class MyNavbar extends Component{
  render(){
    return ( 
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Bonequinhos!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="nome do produto" className="mr-sm-2" />
            <Button variant="outline-success">Pesquisar</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNavbar