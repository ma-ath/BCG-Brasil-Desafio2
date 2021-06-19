import React, {Component} from "react";
import MyNavbar from "../components/navbar";
import CardsHandler from "../components/renderCards";
import MyBottomBar from "../components/bottomBar";

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
        <MyBottomBar />
      </div>
    );
  }
}

export default Home