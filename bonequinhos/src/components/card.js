import React, {Component} from "react";
import {Card, Button, ButtonGroup} from 'react-bootstrap';

class MyCard extends Component{
    //props = {
    //    cardTitle: "Nome",
    //    cardInfo: "Info",
    //    cardPrice: 50
    //}

    state = {
        shopCartQuantity: 0
    }

    constructor(){
        super();
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    addToCart() {
        this.setState({
            shopCartQuantity: this.state.shopCartQuantity + 1
        });
        console.log("adicionado ao carrinho", this.state.shopCartQuantity)
    }

    removeFromCart() {
        if (this.state.shopCartQuantity > 0)
        {
            this.setState({shopCartQuantity:this.state.shopCartQuantity-1})
        };
        console.log("retirado do carrinho", this.state.shopCartQuantity)     
    }

    clearCart () {
        this.setState({shopCartQuantity:0})
    }

    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.cardTitle}</Card.Title>
                <Card.Text>{this.props.cardInfo}</Card.Text>
                <Card.Text>{this.props.cardPrice}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={this.removeFromCart}>-</Button>
                    <Button variant="primary" onClick={this.addToCart}>+</Button>
                    <Button variant="light" onClick={this.clearCart}>Limpar</Button>
                </ButtonGroup>
                <Card.Text>Quantidade: {this.state.shopCartQuantity}</Card.Text>
            </Card.Body>
            </Card>
        );
    }
}

export default MyCard