import React from "react";
import BeyCard from '../Components/BeyCard'
import beyarray from '../api'

class BeyContainer extends React.Component {

  images = () => {
    return beyarray.map(img => <BeyCard imgObj={img} favorites={this.props.favorites}/>)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.images()}
      </div>
    );
  }
}

export default BeyContainer;
