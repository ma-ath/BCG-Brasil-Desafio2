import React, {Component} from "react";
import MyNavbar from "../components/navbar";
import CardsHandler from "../components/renderCards";

class Home extends Component{
  state = {}

  render(){
    return (
      <div>
        <MyNavbar />
        <CardsHandler />
      </div>
    );
  }
}

export default Home