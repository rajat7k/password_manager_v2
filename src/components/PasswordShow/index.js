import React, { Component } from 'react'
import ListItem from '../listItem'
import './index.css'

export default class PasswordShowCard extends Component {

  state = {
    isShowPassword: false,
  }

  inputChangeHandler = (event) => {
    this.props.inputChangeHandler(event);
  }

  handleCheckBox = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword })
  }

  render() {
    return (
      <div className="show-password-container">

        <div className="show-password-header">

          <div className='heading-box'>
            <p className="password-count-heading">Your Passwords</p>
            <div className='password-count'>{this.props.passwordDetailsList.length}</div>
          </div>

          <div className="search-input-box">

            <div className="search-icon-box">
              <img className='search-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" />
            </div>


            <input onChange={this.inputChangeHandler} className='search-input' type="text" placeholder='Search' />

          </div>
        </div>

        <hr className='break-line' />

        <div className='checkbox-container' >
          <input onChange={this.handleCheckBox} className='checkbox-input' type="checkbox" />
          <p className="checkbox-para">Show Passwords</p>
        </div>

        {this.props.passwordDetailsList.length > 0
          ? <div className="passwords-list">
            {
              this.props.passwordDetailsList.map(item => {
                return <ListItem key={item.id} onClick={this.props.onClick} isShowPassword={this.state.isShowPassword} passwordDetails={item} />
              })}
          </div>
          : <div className="no-password-box">
            <img className='no-password-img' src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png " alt="no password" />
            <p className='no-password-para' >No Passwords</p>
          </div>
        }

      </div>
    )
  }
}
