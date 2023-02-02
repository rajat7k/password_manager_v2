import React, { Component } from 'react'
import PasswordInputCard from '../PasswordInput'
import PasswordShowCard from '../PasswordShow'
import './index.css'

export default class MainPage extends Component {

    state={savedPasswordList:[],id:0};

    handleAddBtnClick=(passwordDetails)=>{

        const passwordDetailObject={
            id:this.state.id,
            website:passwordDetails.website,
            username:passwordDetails.username,
            password:passwordDetails.password,
        }
        

        const arr=this.state.savedPasswordList;
        if(passwordDetails.website!=='' && passwordDetails.username!=='' && passwordDetails.password!=='')
        {
            arr.push(passwordDetailObject);
        }

        this.setState({savedPasswordList:arr,id:this.state.id+1});
    }

    handleDeleteItem = (id) => {
        console.log("handleDelete",id);
        this.setState({ savedPasswordList: this.state.savedPasswordList.filter((obj) => obj.id !== id) });
      }

    render() {
        console.log(this.state.savedPasswordList)
        return (
            <div className="main-container">

                <img className='app-logo' src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png " alt="app logo" />

                <PasswordInputCard handleAddBtnClick={this.handleAddBtnClick} />

                <PasswordShowCard onClick={this.handleDeleteItem}  passwordDetailsList={this.state.savedPasswordList} />

            </div>
        )
    }
}
