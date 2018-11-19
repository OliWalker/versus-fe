import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Matches.css';
import Match from '../Match/Match';
import { connect } from 'react-redux';
import './Matches.css';

class Matches extends Component {
  static propTypes = {
    user: PropTypes.object,
    matches: PropTypes.array
  };

  state = {
    filteredMatches: this.props.matches,
    activeButton: 'ALL'
  };

  componentDidUpdate(prevProps) {
    if (prevProps.matches !== this.props.matches)
      this.setState({ filteredMatches: this.props.matches });
  }

  renderMatches = () =>
    this.state.filteredMatches.map((theMatch, i) => {
      if (theMatch.match_id === null) return <div key={i} />;
      return (
        <Match
          key={theMatch.match_id + i}
          matchInfo={theMatch}
          user={this.props.user}
        />
      );
    });

  renderMatchesFilter = event => {
    const matches = this.props.matches;
    let requestedMatches;
    event.target.name !== 'ALL'
      ? (requestedMatches = matches.filter(
          theMatch => theMatch.status === event.target.name
        ))
      : (requestedMatches = matches);
    this.setState({
      filteredMatches: requestedMatches,
      activeButton: event.target.name
    });
  };

  render() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.name === this.state.activeButton
        ? button.classList.add('MyMatches__button__active')
        : button.classList.remove('MyMatches__button__active');
    });

    const buttonsNames = ['ALL', 'ACCEPTED', 'PENDING', 'FINISHED'];

    return (
      <div className="MyMatches">
        <div className="MyMatches__header">
          <h1>My Matches</h1>

          <div
            className="MyMatches__buttonFilter"
            ref={ref => (this.buttons = ref)}
          >
            {buttonsNames.map(el => (
              <button
                key={el}
                type="button"
                onClick={this.renderMatchesFilter}
                name={el}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        <div className="MyMatches__displayMatches">{this.renderMatches()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  matches: state.matches
});

export default connect(mapStateToProps)(Matches);
