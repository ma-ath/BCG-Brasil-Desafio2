import React, {Component} from "react";
import MyNavbar from "../components/navbar";
import CardsHandler from "../components/renderCards";
import MyForm from "../components/form";

class Home extends Component{
  render(){
    return (
      <div>
        <MyNavbar />
        <br/>
        <br/>
        <br/>
        <CardsHandler />
        <br/>
        <br/>
        <br/>
        <MyForm />
      </div>
    );
  }
}

export default Home