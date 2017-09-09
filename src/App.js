import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Card extends Component {
  render() {
    return (
      <button className={"card" + (this.props.selected ? ' selected' : '')} onClick={() => this.props.onClick()}>
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
    return (
      <main>
        <section className="table">
          <div className="field">
            {["Calvin", "Shane", "Jake", "Lucas"].map((name) => {
              return <figure className="placeholder-outer">
                <div className="placeholder"></div>
                <figcaption>{name}</figcaption>
              </figure>
            })}
          </div>
        </section>
        <section>
          <Hand />
        </section>
      </main>
    )
  }
}

export default App;
