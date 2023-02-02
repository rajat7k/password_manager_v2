import React, { Component } from 'react'
import './index.css'

export default class PasswordInputCard extends Component {

  // handleAddClickBtn = this.props.handleAddBtnClick;

  state = { website: '', username: '', password: '' };

  sendPasswordDetails = () => {
    const passwordDetails = {
      website: this.state.website,
      username: this.state.username,
      password: this.state.password,
    }
    this.props.handleAddBtnClick(passwordDetails);
    this.setState({website:'',username:'',password:''});
  }

  onChangeWebsite = (event) => {
    this.setState({ website: event.target.value }) 
  }


  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value }) 
  }

  onChangePassword=(event)=>{
    this.setState({password:event.target.value});
  }

  render() {
    
    return (
      <div className="password-input-container">

        <div className="password-input-card">

          <p className="add-password-heading">Add New Password</p>

          <div className="input-container">
            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" className="input-icon" />
            <input value={this.state.website} onChange={this.onChangeWebsite} type="text" className="input-field" placeholder='Enter Website' />
          </div>

          <div className="input-container">

            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png " alt="username" className="input-icon" />

            <input value={this.state.username} onChange={this.onChangeUsername} type="text" className="input-field" placeholder='Enter Username'  />

          </div>

          <div className="input-container">
            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password" className="input-icon" />
            <input 
            value={this.state.password}
             onChange={this.onChangePassword} 
             type="password" 
             className="input-field" 
             placeholder='Enter Password' />
          </div>

          <button onClick={this.sendPasswordDetails} className='password-add-btn' >Add</button>

        </div>

        <img className='password-manager-img' src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" alt="password manager" />

      </div>
    )
  }
}
