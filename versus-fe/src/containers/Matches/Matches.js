import React, { Component } from 'react';
import './Matches.css';
import Match from '../../components/Match/Match';
import { connect } from 'react-redux';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredMatches: this.props.matches,
      activeButton: null
    };
  }

  renderMatches = () => {
    const filteredMatches = this.state.filteredMatches;
    return filteredMatches.map(theMatch => {
      return <Match matchInfo={theMatch} />;
    });
  };

  renderMatchesFilter = event => {
    const matches = this.props.matches;
    const requestedMatches = matches.filter(
      theMatch => theMatch.status === event.target.name
    );
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
    const buttonsNames = ['ACCEPTED', 'PENDING', 'FINISHED', 'DENIED'];

    return (
      <div className="MyMatches">
        <div className="MyMatches__header">
          <h1> My Matches </h1>

          <div className="MyMatches__buttonFilter">
            {buttonsNames.map(el => (
              <button
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
  matches: state.matches
});

export default connect(mapStateToProps)(Matches);