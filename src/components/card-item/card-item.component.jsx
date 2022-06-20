import { Component } from "react";

import "./card-item.styles.css";

class CardItem extends Component {
  render() {
    const { name, id, email } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img alt={name} src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
