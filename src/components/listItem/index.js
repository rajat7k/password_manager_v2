import React, { Component } from 'react'
import './index.css'



export default class ListItem extends Component {

  render() {
    const {id, website, username, password } = this.props.passwordDetails;
    return (
      <div className="password-detail-card">
        <div className="avtar">
          {website[0]}
        </div>
        <div className="details">
          <p>{website}</p>
          <p> {username} </p>

          {this.props.isShowPassword ? <p> {password} </p> : <img className='stars-img' src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png " alt="stars" />}


        </div>
        <button onClick={()=>this.props.onClick(id)} className='delete-btn' >
          <img className='delete-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png " alt="delete" /></button>
      </div>
    )
  }
}
