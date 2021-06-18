import React, {Component} from "react";
import {Form, Col, Button, Jumbotron} from 'react-bootstrap';
import { getCookie } from "../cookiesHandler";

class MyBottomBar extends Component{
  constructor(){
    super();
    this.state = { data: [] };
    this.send_email = this.send_email.bind(this);
  }

  componentDidMount() {
    let init = {
        method: 'GET',
        mode: 'cors'
    };
    const product_url = "https://aw111a5inl.execute-api.sa-east-1.amazonaws.com/prod/products"      
    fetch(product_url, init)
    .then(response => response.json())
    .then((jsonData) => {
        this.setState({ data: jsonData })
        console.log(jsonData[0])
    })
    .catch((error) => {
        console.error(error)
    })
  }

  send_email(){
    //let email = "";
    //this.state.data.map((card)=>{   
    //    let cookie=JSON.parse(getCookie(card.productName));
    //    console.log(cookie);
    //    return [cookie[0].cardPrice, cookie[1].shopCartQuantity];
    //  });
  }

  render(){
    return ( 
    <Jumbotron>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSurname">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control placeholder="Sobrenome" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="Rua ..." />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Endereço 2</Form.Label>
          <Form.Control placeholder="Apartamente ..." />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Estado</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={this.send_email}>
          Comprar!
        </Button>
      </Form>
    </Jumbotron>
    );
  }
}

export default MyBottomBar