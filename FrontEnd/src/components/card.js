import React, {Component} from "react";
import {Card, Button, ButtonGroup, Badge} from 'react-bootstrap';
import { saveCookie } from "../cookiesHandler";
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

    componentDidMount() {
        // Saves cookies:
        let cookies = [
            this.props,
            this.state
        ]
        console.log("cookies", cookies)
        saveCookie(this.props.cardTitle, JSON.stringify(cookies))
    }

    addToCart() {
        this.setState({
            shopCartQuantity: this.state.shopCartQuantity + 1
        });
        // Saves cookies:
        let cookies = [
            this.props,
            {shopCartQuantity: this.state.shopCartQuantity + 1}
        ]
        console.log("cookies", cookies)
        saveCookie(this.props.cardTitle, JSON.stringify(cookies))
    }

    removeFromCart() {
        if (this.state.shopCartQuantity > 0)
        {
            this.setState({shopCartQuantity:this.state.shopCartQuantity-1})
        };
        // Saves cookies:
        let cookies = [
            this.props,
            {shopCartQuantity: this.state.shopCartQuantity - 1}
        ]
        console.log("cookies", cookies)
        saveCookie(this.props.cardTitle, JSON.stringify(cookies))
    }

    clearCart () {
        this.setState({shopCartQuantity:0})
        let cookies = [
            this.props,
            {shopCartQuantity: 0}
        ]
        console.log("cookies", cookies)
        saveCookie(this.props.cardTitle, JSON.stringify(cookies))
    }

    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.cardTitle}</Card.Title>
                <Card.Text>{this.props.cardInfo}</Card.Text>
                <Card.Text>Preço: R$ {this.props.cardPrice}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={this.removeFromCart}>-</Button>
                    <Button variant="primary" onClick={this.addToCart}>+</Button>
                    <Button variant="light" onClick={this.clearCart}>Limpar</Button>
                    <h3><Badge variant="warning">Itens: {this.state.shopCartQuantity}</Badge></h3>
                </ButtonGroup>
                
                <Card.Text>Total: {this.state.shopCartQuantity * parseInt(this.props.cardPrice)}</Card.Text>
            </Card.Body>
            </Card>
        );
    }
}

export default MyCard