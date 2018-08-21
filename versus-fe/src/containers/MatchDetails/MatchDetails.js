import React, { Component } from 'react';
import './MatchDetails.css';
import innerComponents from './innerMatchComponent';
import MatchDetailsFinished from './MatchDetailsFinished';
import OpponentDetails from '../../components/OpponentDetails/OpponentDetails';

import { connect } from 'react-redux';
import { sendMatchDetails, getOpponent } from '../../redux/actions';

class MatchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aMatch: {},
      opponentNow: 'false',
      activeButton: 'Finished'
    };
    this.filteredMatchAndGetOpponent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.opponentNow !== prevProps.opponentNow) {
      this.setState({ opponentNow: this.props.opponentNow });
    }
  }

  filteredMatchAndGetOpponent = () => {
    const IdParam = this.props.match.params.id;
    const IdOfMatch = parseInt(IdParam, 10);
    const matchedWithId = this.props.matches.filter(
      theMatch => theMatch.matches_id === IdOfMatch
    );
    this.setState({ aMatch: { ...matchedWithId } });
    this.props.getOpponent();
  };

  renderSubComponent = () => {
    if (this.state.activeButton === 'Opponent')
      return (
        <div className="matchOpponentStats">
          <OpponentDetails theOpponent={this.state.opponentNow} />
        </div>
      );
    else if (this.state.activeButton === 'Match Details')
      return innerComponents.loactionSetter({
        sendMatchDetails: this.props.sendMatchDetails
      });
    else if (this.state.activeButton === 'Finished')
      return <MatchDetailsFinished match_id={this.props.match.params.id} />;
  };

  buttonActive = event => {
    this.setState({
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

    const buttonsNames = ['Opponent', 'Match Details', 'Finished'];
    return (
      <div className="matchDetailsContainer">
        <div className="matchTitle">
          <h1> Match Details </h1>

          <div className="MyMatches__buttonFilter">
            {buttonsNames.map(el => (
              <button
                key={el}
                type="button"
                name={el}
                onClick={this.buttonActive}
              >
                {el}
              </button>
            ))}
          </div>
        </div>

        {this.renderSubComponent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  matches: state.matches,
  opponentNow: state.opponentNow,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  sendMatchDetails: apiInfo => dispatch(sendMatchDetails(apiInfo)),
  getOpponent: () =>
    dispatch(getOpponent({ endpoint: '/opponent/leagueid/userid' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchDetails);
