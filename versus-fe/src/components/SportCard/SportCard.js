import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';

export default class SportCard extends React.Component {
  state = {
    isOpen: false,
    isJoinOpen: true
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const height = this.state.isOpen ? { height: 100 } : { height: 0 };
    const joinHeight = this.state.isJoinOpen ? { height: 200 } : { height: 0 };
    return (
      <div>
        {/* <div className="SportCard" onClick={this.toggle}>
          <h2> {this.props.sport.name} </h2>
        </div> */}

        <div className="SportCard SportCard__JoinLeague" onClick={this.toggle}>
          <div className="SkillLevel">Choose Your Skill Level</div>
          <div className="SportCard__JoinLeague__buttons">
            <button className="SportCard__button"> Begginer </button>
            <button className="SportCard__button"> Intermediate </button>
            <button className="SportCard__button"> Advanced </button>
          </div>
        </div>

        <div className="SportCard__buttons" style={height}>
          {this.props.mine ? (
            <div className="SportCard__myButtons">
              <Link to={`/league/${this.props.sport.league_id}`}>
                <button className="SportCard__button"> See League </button>
              </Link>
              <button className="SportCard__button"> Find Match </button>
            </div>
          ) : (
            <Link to={`/league/${this.props.sport.league_id}`}>
              <button className="SportCard__button"> Want To Join? </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
