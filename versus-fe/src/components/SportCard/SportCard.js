import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';

export default class SportCard extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const height = this.state.isOpen ? { height: 100 } : { height: 0 };
    return (
      <div>
        <div className="SportCard SportCard__open" onClick={this.toggle}>
          <h2> {this.props.sport.name} </h2>
        </div>

        <div className="SportCard__buttons" style={height}>
          {this.props.mine ? (
            <Link to={`/league/${this.props.sport.league_id}`}>
              <button className="SportCard__button"> See League </button>
            </Link>
          ) : (
            <Link to={`/league/${this.props.sport.league_id}`}>
              <button className="SportCard__button"> Join League </button>
            </Link>
          )}

          <button className="SportCard__button"> Find Match </button>
        </div>
      </div>
    );
  }
}
