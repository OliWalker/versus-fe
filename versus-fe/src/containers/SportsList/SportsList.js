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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allLeagues.length === 0 && this.props.allLeagues.length > 0) {
      const mySports = this.props.stats.map(sport => sport.name);
      const myLeagues = this.props.allLeagues.filter(el =>
        mySports.includes(el.name)
      );
      const otherLeagues = this.props.allLeagues.filter(
        el => !mySports.includes(el.name)
      );
      this.setState({
        allLeagues: this.props.allLeagues,
        myLeagues,
        otherLeagues
      });
    }
  }

  handleScroll = e => {
    const myViewPort = e.target.scrollTop;
    const allSportsDiv = document.querySelector('.SportList__allSports')
      .scrollHeight;
    myViewPort > allSportsDiv
      ? this.setState({ mySportsHeader: false })
      : this.setState({ mySportsHeader: true });
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  handleSearch = e => {
    this.setState({ search: e.target.value });
    const mySports = this.props.stats.map(sport => sport.name);
    const regex = RegExp(e.target.value);
    const allLeagues = this.props.allLeagues.filter(el => regex.test(el.name));
    const myLeagues = allLeagues.filter(el => mySports.includes(el.name));
    const otherLeagues = allLeagues.filter(el => !mySports.includes(el.name));
    this.setState({
      allLeagues,
      myLeagues,
      otherLeagues
    });
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
            <i>{this.state.mySportsHeader ? 'my Sports' : 'all Sports'}</i>
          </span>
        </div>

        <div className="SportsList__list" onScroll={this.handleScroll}>
          <div className="SportList_mySports">
            {this.state.myLeagues.map((sport, i) => (
              <SportCard key={i} sport={sport} mine={true} />
            ))}
          </div>

          <div className="SportList__allSports">
            {this.state.otherLeagues.map((sport, i) => (
              <SportCard key={i} sport={sport} />
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
  getAllLeagues: () => dispatch(getAllLeagues({ endpoint: '/sports' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportsList);
