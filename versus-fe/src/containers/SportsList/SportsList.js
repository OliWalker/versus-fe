import React, { Component } from 'react';
import './SportsList.css';
import SportCard from '../../components/SportCard/SportCard';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions'
import Loading from '../../components/LoadingPage/LoadingPage';

class SportsList extends Component {

  constructor(props) {
    super(props)
    if (this.props.stats.length === 0) this.props.getUserInfo()

  }

  render() {

    console.log(this.props)
    if (this.props.loading) return <Loading />
    else return (
      <div className='SportsList'>
        <div className='SportsList__header'>
          <input className='SportsList__Search' value='Search' />
          <span><i> my sports</i> </span>
        </div>
        
        <div className='SportsList__list'>
          {
          this.props.stats[0] ? 
          this.props.stats.map((sport,i) => <SportCard key={i} sport={sport}/>)
          : null
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.stats,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'})),
})


export default connect(mapStateToProps, mapDispatchToProps)(SportsList);
