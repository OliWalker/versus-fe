import React, { Component } from 'react';
import './SportsList.css';
import SportCard from '../../components/SportCard/SportCard';
import { connect } from 'react-redux';
import { getAllLeagues } from '../../redux/actions';

class SportsList extends Component {
  constructor(props) {
    super(props);
    this.props.getAllLeagues();
    this.allsports = React.createRef();

    this.state = {
      mySports: true
    };
  }

  handleScroll = e => {
    let myViewPort = e.target.scrollTop;
    let allSportsDiv = document.querySelector('.SportList__allSports')
      .scrollHeight;
    myViewPort > allSportsDiv
      ? this.setState({ mySports: false })
      : this.setState({ mySports: true });
  };

  handleSearch = () => {};

  render() {
    const mySports = this.props.stats.map(sport => sport.name);
    const allSports = this.props.allLeagues.filter(
      el => !mySports.includes(el.name)
    );
    return (
      <div className="SportsList">
        <div className="SportsList__header">
          <input
            className="SportsList__Search"
            value="Search"
            onChange={this.handleSearch}
          />
          <span>
            <i>{this.state.mySports ? 'my Sports' : 'all Sports'}</i>
          </span>
        </div>

        <div className="SportsList__list" onScroll={this.handleScroll}>
          <div className="SportList_mySports">
            {this.props.stats[0]
              ? this.props.stats.map((sport, i) => (
                  <SportCard key={i} sport={sport} />
                ))
              : null}
          </div>

          <div className="SportList__allSports">
            {allSports[0]
              ? allSports.map((sport, i) => <SportCard key={i} sport={sport} />)
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
  loading: state.loading,
  allLeagues: state.allLeagues
});

const mapDispatchToProps = dispatch => ({
  getAllLeagues: () => dispatch(getAllLeagues({ endpoint: '/sports' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportsList);
