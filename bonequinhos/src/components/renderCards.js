import React, {Component} from "react";
import { Grid } from '@material-ui/core';
import MyCard from "./card";

class CardsHandler extends Component{
    constructor(){
        super();
        this.state = { data: [] };
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
    
    render(){
        return (
        <Grid container justify="center" spacing={5}>
            {this.state.data.map(card => (
                <Grid key={card.productName} item>
                    <MyCard cardTitle={card.productName} cardInfo={card.productInfo} cardPrice={card.productPrice}/>
                </Grid>
            ))}
        </Grid>
        );
    }
}

export default CardsHandler