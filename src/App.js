import React from "react";
import beyArray from "./api";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";

class App extends React.Component {

  state = {
    beyArray: []
  }

  favorites = (newFav) => {
    this.setState({beyArray: [...this.state.beyArray, newFav]})
  }

  render() {
    return (
      <div className="container" >
        <BeyContainer favorites={this.favorites} />
        <Favorites array={this.state.beyArray} />
      </div>
    );
  }

};

export default App;
