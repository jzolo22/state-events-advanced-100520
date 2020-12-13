import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";

export default class Favorites extends Component {

  favoritesArray = () => {
    return this.props.array.map(imgObj => <BeyCard imgObj={imgObj} key={imgObj.id} />)
  }

  handleDelete = () => {
    window.alert("I got a hot sauce in my bag, swag")
  }

  
  render() {
    return (
      <div onClick={this.handleDelete} className="favorites">
        <h1>Favorites</h1>
        {this.favoritesArray()}
      </div>
    );
  }
}
