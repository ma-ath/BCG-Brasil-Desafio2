import React, {Component} from "react";
import { saveCookie , getCookie} from "../cookiesHandler";
import {Alert} from 'react-bootstrap'

class MyForm extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      surname: '',
      adr1: '',
      adr2: '',
      city: '',
      state: '',
      zip: '',
      email: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleAdr1Change = this.handleAdr1Change.bind(this);
    this.handleAdr2Change = this.handleAdr2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateEmail = this.generateEmail.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.registrarPedido = this.registrarPedido.bind(this);
  }

  //  Form
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleSurnameChange(event) {
    this.setState({surname: event.target.value});
  }
  handleAdr1Change(event) {
    this.setState({adr1: event.target.value});
  }
  handleAdr2Change(event) {
    this.setState({adr2: event.target.value});
  }
  handleCityChange(event) {
    this.setState({city: event.target.value});
  }
  handleStateChange(event) {
    this.setState({state: event.target.value});
  }
  handleZipChange(event) {
    this.setState({zip: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    if (this.checkFields()){
      alert(
        'Compra efetuada. Como você é lindo, não será necessário entrar com forma de pagamento, e todos os produtos sairão de graça.\n\n'+
        'Nome: ' + this.state.name +'\n'+
        'Sobrenome: ' + this.state.surname +'\n'+
        'Endereço 1: ' + this.state.adr1 +'\n'+
        'Endereço 2: ' + this.state.adr2 +'\n'+
        'Cidade: ' + this.state.city +'\n'+
        'Estado: ' + this.state.state +'\n'+
        'CEP: ' + this.state.zip+'\n'+
        'Email: ' + this.state.email+
        '\n\nParabéns pela ótima compra! Prazo de entrega: 14 dias úteis');
  
      event.preventDefault();
      // Saves cookies:
      let cookies = [
        this.state
      ]
      saveCookie("forms", JSON.stringify(cookies))
  
  
      // SEND EMAIL    
      let params = {
        MessageBody: this.generateEmail(),
        MessageSubject: "Parabéns por mais uma compra",
        ToAddresses: this.state.email
      }

      console.log(JSON.stringify(params));
  
      var url = "https://aw111a5inl.execute-api.sa-east-1.amazonaws.com/prod/sendEmail";
  
      var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.setRequestHeader("Content-Type", "application/json");
      req.addEventListener("load", function () {
          console.log(req.status);
          
          if (req.status < 400) {
            console.log('sucess');
          } else {
            console.log("Request failed: "+ req.status+" _" + req.statusText);
          }
        });
        req.send(JSON.stringify(params));
        this.registrarPedido();
      }
    }
  
  registrarPedido(){
    let dadosPedido = JSON.parse(getCookie("data"));

    let pedido = {
      dadosPedido: this.generateEmail()
    }

    var url = "https://aw111a5inl.execute-api.sa-east-1.amazonaws.com/prod/registrarPedido";
  
    var req = new XMLHttpRequest();
      req.open("POST", url, true);
      req.setRequestHeader("Content-Type", "application/json");
      req.addEventListener("load", function () {
          console.log(req.status);
          
          if (req.status < 400) {
            console.log('sucess');
          } else {
            console.log("Request failed: "+ req.status+" _" + req.statusText);
          }
        });
        req.send(JSON.stringify(pedido));
  }

  generateEmail(){
    let data = JSON.parse(getCookie("data"));

    let header = 'Obrigado por comprar na loja dos Bonequinhos! Aqui está o resumo da sua compra.\n\n';
    let str = '';
    let total = 0

    data.map(card => (
      JSON.parse(getCookie(card.productName))[1].shopCartQuantity !== 0 ?
      (
        str+= 'Produto: '+card.productName+'\n'+
        'Preço: '+card.productPrice+'\n'+
        'Quantidade: '+JSON.parse(getCookie(card.productName))[1].shopCartQuantity+'\n\n',
        total+=parseInt(card.productPrice)*parseInt(JSON.parse(getCookie(card.productName))[1].shopCartQuantity)
      ) : total += 0
    ));

    let bottom = 'Preço total dos produtos: '+total+"\n\nDados de entrega: \n\n"+
      'Nome: ' + this.state.name +'\n'+
      'Sobrenome: ' + this.state.surname +'\n'+
      'Endereço 1: ' + this.state.adr1 +'\n'+
      'Endereço 2: ' + this.state.adr2 +'\n'+
      'Cidade: ' + this.state.city +'\n'+
      'Estado: ' + this.state.state +'\n'+
      'CEP: ' + this.state.zip+'\n'+
      'Email: ' + this.state.email+'\n\nMuito obrigado por comprar na Bonequinhos!'

    return header+str+bottom;
  }

  checkFields(){
    if (this.state.name === ''){
      alert('Nome invalido!', this.state.name);
      return false;
    }
    if (this.state.surname === ''){
      alert('Sobrenome invalido!', this.state.surname);
      return false;
    }
    if (this.state.adr1 === ''){
      alert('Endereço 1 invalido!', this.state.surname);
      return false;
    }
    if (this.state.city === ''){
      alert('Cidade invalida!', this.state.surname);
      return false;
    }
    if (this.state.state === ''){
      alert('Estado invalido!', this.state.surname);
      return false;
    }
    if (this.state.zip === ''){
      alert('CEP invalido!', this.state.zip);
      return false;
    }
    if (this.state.email === ''){
      alert('Email invalido!', this.state.email);
      return false;
    }
    return true;
  }

  render(){
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Alert variant='primary'>
          <form onSubmit={this.handleSubmit}>
            <label>Nome</label><br/>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} /><br/>
            <label>Sobrenome</label><br/>
            <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} /><br/>
            <label>Endereço 1</label><br/>
            <input type="text" value={this.state.adr1} onChange={this.handleAdr1Change} /><br/>
            <label>Endereço 2</label><br/>
            <input type="text" value={this.state.adr2} onChange={this.handleAdr2Change} /><br/>
            <label>Cidade</label><br/>
            <input type="text" value={this.state.city} onChange={this.handleCityChange} /><br/>
            <label>Estado</label><br/>
            <input type="text" value={this.state.state} onChange={this.handleStateChange} /><br/>
            <label>CEP</label><br/>
            <input type="text" value={this.state.zip} onChange={this.handleZipChange} /><br/>
            <label>Email</label><br/>
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} /><br/>
            
            <input type="submit" value="Submit" />
          </form>
        </Alert>
      </div>
    );
  }
}

export default MyForm