import React, {Component} from "react";
import MyCard from "./card";

class CardsHandler extends Component{
    state = {
    }

    constructor(){
        super();
    }

    render(){
        return (
            <div>
            <ul><MyCard /></ul>
            <ul><MyCard /></ul>
            </div>
        );
    }
}

export default CardsHandler