import React from "react";

class BeyCard extends React.Component {

  handleClick = () => {
    // console.log(this.props)
    this.props.favorites(this.props.imgObj)
  }

  render () {
    return (
      <div onClick={this.handleClick} className="card">
        <h3>{this.props.imgObj.name}</h3>
        <img src={this.props.imgObj.img} alt={this.props.imgObj.name} />
      </div>
    );
  }
};

export default BeyCard;
