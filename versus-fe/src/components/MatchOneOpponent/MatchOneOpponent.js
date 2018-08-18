import React, { Component } from 'react';
import './MatchOneOpponent.css';
import { AreaChart, Area, XAxis } from 'recharts';

export default class MatchOneOpponent extends Component {
  constructor(props) {
    super(props);
    let stats;
    if (this.props.opponent)
      stats = this.props.opponent.match_history.map((stat, i) => {
        return { date: i + 1, score: stat.elo };
      });

    // if (this.props.stats) {
    //   console.log('USER', this.props.stats[0].elo_history);
    //   stats = this.props.stats[0].elo_history;
    // }
    this.state = {
      hover: '',
      stats
    };
  }

  handleFlip = () => {
    const hover = this.state.hover === '' ? 'hover' : '';
    this.setState({ hover });
  };

  render() {
    console.log(this.state);
    return (
      <div className="MatchOneOpponent">
        {this.props.opponent ? (
          <div>
            <h2> {this.props.opponent.username} </h2>
            <h1> {this.props.opponent.score} </h1>
          </div>
        ) : null}

        <div
          className={`MatchOneOpponent flip-container ${this.state.hover}`}
          onTouchStart={this.handleFlip}
        >
          <div className="MatchOneOpponent__picture flipper">
            {this.props.opponent ? (
              <img
                src={this.props.opponent.image_path}
                alt="opponent"
                className="front"
              />
            ) : (
              <img
                src={this.props.user.image_path}
                alt="user"
                className="front"
              />
            )}

            <div className="MatchOneOppenent__specs back">
              <div className="MatchOneOpponent__wonlost">
                <span>won</span>
                <span>lost</span>
              </div>
              <div className="MatchOneOpponent__score">
                {this.props.opponent ? (
                  <span>{this.props.opponent.matches_won}</span>
                ) : (
                  <span>13</span>
                )}
                {this.props.opponent ? (
                  <span>{this.props.opponent.matches_lost}</span>
                ) : (
                  <span>9</span>
                )}
              </div>
              <div className="MatchOneOpponent__graph">
                <AreaChart width={220} height={200} data={this.state.stats}>
                  <XAxis dataKey="date" padding={{ bottom: -150 }} />
                  {/*<YAxis dataKey="score" padding={{ bottom: -150 }} /> */}
                  <Area
                    type="monotone"
                    dataKey="score"
                    stoke="#8884d8"
                    strokeWidth={3}
                  />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>

        {this.props.user ? (
          <div>
            <h2> {this.props.user.username} </h2>
            <h1> {this.props.user.total_score} </h1>
          </div>
        ) : null}
      </div>
    );
  }
}
