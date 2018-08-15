import React, { Component } from 'react';
import './SportsList.css';
import SportCard from '../../components/SportCard/SportCard';
import { connect } from 'react-redux';
import { getUserInfo, getAllLeagues } from '../../redux/actions'
import Loading from '../../components/LoadingPage/LoadingPage';

class SportsList extends Component {

  constructor(props) {
    super(props)
    if (this.props.stats.length === 0) this.props.getUserInfo()
    this.props.getAllLeagues()
    this.allsports = React.createRef()

    this.state = {
      mySports: true
    }
  }

  handleScroll = (e) => {
    // console.log(e.target.scrollTop)
    let myViewPort = e.target.scrollTop
    let allSportsDiv = document.querySelector('.SportList__allSports').scrollHeight;
    // if (x) console.log(x.scrollHeight)
    myViewPort > allSportsDiv ? this.setState({mySports: false}) : this.setState({mySports: true})
  }

  render() {
    const mySports = this.props.stats.map(sport => sport.name)
    const allSports = this.props.allLeagues.filter(el => !mySports.includes(el.name))
    if (this.props.loading) return <Loading />
    else return (
      <div className='SportsList'>
        <div className='SportsList__header'>
          <input className='SportsList__Search' value='Search' />
          <span><i>
            {this.state.mySports ? 'my Sports' : 'all Sports'}
          </i> </span>
        </div>
        
        <div className='SportsList__list' onScroll={this.handleScroll}>

          <div className='SportList_mySports'>
            {
            this.props.stats[0] ? 
            this.props.stats.map((sport,i) => <SportCard key={i} sport={sport}/>)
            : null
            }
          </div>

          <div className='SportList__allSports'> 
            {
              allSports[0] ? 
              allSports.map((sport,i) => <SportCard key={i} sport={sport}/>)
              : null
            }

          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.stats,
  loading: state.loading,
  allLeagues: state.allLeagues
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'})),
  getAllLeagues: () => dispatch(getAllLeagues({endpoint:'/sports'}))
})


export default connect(mapStateToProps, mapDispatchToProps)(SportsList);
