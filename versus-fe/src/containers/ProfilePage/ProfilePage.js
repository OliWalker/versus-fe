import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions'

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
    return (

      <div className="ProfilePage">

        <div className="ProfilePage__picture">
          <img alt="random Dude" src="http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-black-and-white-1.jpg" />
        </div>

        <span className="ProfilePage__name"> Chad Jenkins </span>

        <span className="ProfilePage__score"><i>1820</i></span>

        <div className="ProfilePage__all__scores"> 

          <div className="ProfilePage__sport__score">
            <span className="ProfilePage__sport__score__single"> <i>1000</i> </span>
            <span className="ProfilePage__sport__name__single"> Tennis </span>
          </div>

          <div className="ProfilePage__sport__score">
            <span className="ProfilePage__sport__score__single"> <i>600</i> </span>
            <span className="ProfilePage__sport__name__single"> Eating </span>
          </div>
          <div className="ProfilePage__sport__score">
            <span className="ProfilePage__sport__score__single"> <i>1900</i> </span>
            <span className="ProfilePage__sport__name__single"> Ping-Pong </span>
          </div>
          <div className="ProfilePage__sport__score">
            <span className="ProfilePage__sport__score__single"> <i>2000</i> </span>
            <span className="ProfilePage__sport__name__single"> Juggling </span>
          </div>
          <div className="ProfilePage__sport__score">
            <span className="ProfilePage__sport__score__single"> <i>1200</i> </span>
            <span className="ProfilePage__sport__name__single"> Flying </span>
          </div>

        </div>


        <div className="ProfilePage__stats">
          <img src="./graph.png" />
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

// api: {
//   endpoint: apiInfo.endpoint,
//   method: apiInfo.method,
//   body: apiInfo.body,
//   headers: apiInfo.headers
// }

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'})),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)