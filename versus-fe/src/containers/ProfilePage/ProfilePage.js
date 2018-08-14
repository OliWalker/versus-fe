import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions'
import ProfileSportScore from '../../components/ProfileSportScore/ProfileSportScore';

class ProfilePage extends Component {

  // componentDidMount() {
  //   fetch('http://private-1cf21-versus3.apiary-mock.com/user/1')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  constructor(props) {
    super(props)
    this.props.getUserInfo()
  }
  
  render() {

    const user = this.props.user;
    const stats = this.props.stats;
    const matches = this.props.matches;

    if (!stats[0]) return <h1> loading </h1>

     else { return (

      <div className="ProfilePage">

        <div className="ProfilePage__picture">
          <img alt="random Dude" src="http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-black-and-white-1.jpg" />
        </div>

        <span className="ProfilePage__name"> {user.first_name} {user.last_name} </span>
        <span className="ProfilePage__score"><i>{user.total_score}</i></span>

        <div className="ProfilePage__all__scores"> 
          {stats.map(sport => {
            return <ProfileSportScore props={{title: sport.name, score: sport.data.score}} />
          })}
        </div>

        <div className="ProfilePage__stats">
          <img src="./graph.png" />
        </div>

      </div>
    )
  }
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  stats: state.stats,
  matches: state.matches
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'})),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)