import { Component } from "react";

import "./card-list.styles.css";

import CardItem from "../card-item/card-item.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardItem monster={monster} />;
        })}
      </div>
    );
    return;
  }
}

export default CardList;
