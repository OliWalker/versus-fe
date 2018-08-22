import React, { Component } from 'react';
import './SportsList.css';
import SportCard from '../../components/SportCard/SportCard';
import { connect } from 'react-redux';
import { getAllLeagues } from '../../redux/actions';

class SportsList extends Component {
  state = {
    mySportsHeader: true,
    allLeagues: [],
    myLeagues: [],
    otherLeagues: [],
    search: '',
    isOpen: false
  };

  componentDidMount() {
    if (this.props.allLeagues.length === 0 && this.props.stats.length > 0)
      this.props.getAllLeagues();
    else this.sortLeagues(this.props.allLeagues);
  }

  sortLeagues = allLeagues => {
    const mySports = this.props.stats.map(sport => sport.sport_name);
    const myLeagues = allLeagues.filter(el => mySports.includes(el.sport_name));
    const otherLeagues = allLeagues.filter(
      el => !mySports.includes(el.sport_name)
    );
    this.setState({
      allLeagues,
      myLeagues,
      otherLeagues
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.allLeagues.length === 0 && this.props.allLeagues.length > 0) {
      this.sortLeagues(this.props.allLeagues);
    }
  }

  handleScroll = e => {
    const myViewPort = e.target.scrollTop;
    const allSportsDiv = document.querySelector('.SportList__allSports')
      .scrollHeight;
    myViewPort > allSportsDiv + 200
      ? this.setState({ mySportsHeader: false })
      : this.setState({ mySportsHeader: true });
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  handleSearch = async e => {
    await this.setState({ search: e.target.value });
    const regex = RegExp(this.state.search);
    const allLeagues = this.props.allLeagues.filter(el =>
      regex.test(el.sport_name)
    );
    this.sortLeagues(allLeagues);
  };

  render() {
    const width = this.state.isOpen ? { width: 220 } : { width: 0 };
    return (
      <div className="SportsList">
        <div className="SportsList__header">
          <input
            className="SportsList__Search"
            placeholder="Search"
            style={width}
            value={this.state.search}
            onChange={this.handleSearch}
          />
          <i
            className="fas fa-search SportsList__SearchIcon"
            onClick={this.toggle}
          />

          <span>
            <i>{this.state.mySportsHeader ? 'My Sports' : 'All Sports'}</i>
          </span>
        </div>

        <div className="SportsList__list" onScroll={this.handleScroll}>
          <div className="SportList_mySports">
            {this.state.myLeagues.map((sport, i) => (
              <SportCard key={i} sport={sport} mine={true} />
            ))}
          </div>

          <div className="SportsList__list__divider">All Sports</div>

          <div className="SportList__allSports">
            {this.state.otherLeagues.map((sport, i) => (
              <SportCard key={i} sport={sport} path={this.props.history} />
            ))}
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
  getAllLeagues: () =>
    dispatch(getAllLeagues({ endpoint: '/barcelona/leagues' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportsList);
