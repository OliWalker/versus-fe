import React, { Component } from 'react';
import './MatchDetails.css';
import LocationMap from './innerMatchComponent'
import MatchDetailsFinished from './MatchDetailsFinished';
import OpponentDetails from '../../components/OpponentDetails/OpponentDetails';

import { connect } from 'react-redux';
import { sendMatchDetails, getOpponent } from '../../redux/actions';

class MatchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aMatch: {},
      activeButton: 'Finished',
      locationQuery:''
    };
  }


  getOpponent = () => {
    const { league_id, user_id } = this.props.match.params;
    this.props.getOpponent(league_id, user_id);
  };

  componentDidMount() {
    if (
      this.props.opponentNow.user_id === Number(this.props.match.params.user_id)
    )
      return;
    if (!this.props.opponentNow.user_id) this.getOpponent();
    else if (this.props.opponentNow.user_id !== this.props.match.params.user_id)
      this.getOpponent();
  }

  goBack = () => {
    this.props.history.goBack();
  };

  renderSubComponent = () => {
    if (this.state.activeButton === 'Opponent')
      return (
        <div className="matchOpponentStats">
          <OpponentDetails theOpponent={this.props.opponentNow} />
        </div>
      );
    else if (this.state.activeButton === 'Match Details')
      return <LocationMap match_id={this.props.match.params.match_id}/>
    else if (this.state.activeButton === 'Finished')
      return (
        <MatchDetailsFinished
          match_id={this.props.match.params.match_id}
          league_id={this.props.match.params.league_id}
          goBack={this.goBack}
        />
      );
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
        <div className="optionsContainer">
          {this.renderSubComponent()}
        </div>
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
  getOpponent: (league_id, user_id) => {
    dispatch(getOpponent({ endpoint: `/opponent/${league_id}/${user_id}` }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchDetails);
