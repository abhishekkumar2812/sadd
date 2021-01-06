import React, { Component } from 'react';
import { ModalContainer, SubscribeButton, UserNameInput } from './styles';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {subscribe} from '../../actions/authActions';

class SubscribeModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: ''
        };
    }

    static propTypes = {
        subscribe: PropTypes.func.isRequired
    }

    userInput = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    subscribeButtonClick = (e) => {
        e.preventDefault();
        const {username, email} =  this.state;
        const userSubscribe = {
            username,
            email
        };
        this.props.subscribe(userSubscribe);
        console.log(this.props.auth);
        this.setState({
            username: '',
            email: ''
        })
    }

    render(){
        return(
            <div>
                <ModalContainer>
                    <UserNameInput name='username' value={this.state.username} onChange={this.userInput} placeholder='enter a username'/>
                    <br/>
                    <UserNameInput name='email' value={this.state.email} onChange={this.userInput} placeholder='enter an email'/>
                    <SubscribeButton onClick={this.subscribeButtonClick}> Subscribe </SubscribeButton>
                
                    <div>
                        {
                            this.props.auth.subscribed ? 
                                (
                                    this.props.auth.new ?
                                    `${this.props.auth.user.email} successfully subscribed`
                                    : `${this.props.auth.user.email} already exists`
                                )
                                :
                                `please enter details`
                        }
                    </div>
                </ModalContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps, {subscribe})
    (SubscribeModal);
