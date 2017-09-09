import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} className={this.props.selected ? "selected card" : "card"}>
        {this.props.value}
      </button>
    );
  }
}

class Hand extends Component {
  constructor() {
    super();
    this.state = {
      selectedCard: 1,
    };
  }

  renderCard(i) {
    return (
      <Card value={i}
        selected={this.state.selectedCard === i}
        onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    let cards = [1, 2, 3, 5, 8, 13, 21];
    return (
      <div className="Hand">
        {cards.map((i) => this.renderCard(i))}
      </div>
    )
  }

  handleClick(i) {
    this.setState({ selectedCard: i });
  }
}

class App extends Component {

  render() {
    return (<Hand />)
  }
}

export default App;
