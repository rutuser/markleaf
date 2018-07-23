import React, { Component } from 'react';
import * as LoginStyle from '../css/login.css'
import { FormGroup, HelpBlock, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateUser, getUser } from '../actions/user-actions';
import { setFalseLogInToggle } from '../actions/login-toggle-actions';
import { setTrueSignInToggle } from '../actions/signin-toggle-actions';

const MainDiv = {
    width: '100%',
    height: '100vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e8e8e8'
}

const MainContainer = {
    background: '#e8e8e8'
}

const container = {
    marginTop: '100px'
}

const Icon = {
    width: '75px',
    height: '75px',
    margin: 'auto',
    background: 'lightblue',
    borderRadius: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    fontFamily: 'sans-serif',
    marginBottom: '30px'
}

const sentenceTwo = {
    textAlign: 'center',
    color: '#c1c1c1',
    marginTop: '100px',
    fontFamily: 'sans-serif'
}

const button = {
    display: 'flex',
    justifyContent: 'center'
}


class Login extends Component {

    onChangePass = e => {
        this.props.onUpdateUser(this.props.userName, e.target.value);
    }

    onChangeName = e => {
        this.props.onUpdateUser(e.target.value, this.props.userPass);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if ((this.props.userName || this.props.userPass) === '') {
            alert('Enter a user and a password');
        }
        if (this.props.onGetUser(this.props.userName)) {
            this.props.onSetToggle();
        } else {
            alert('You are not Sign in... Please Sign in first');
        }
    }

    onSignInToggle = () => {
        this.props.onSetTrueSignInToggle();
        this.props.onSetFalseLogInToggle();
    }

    render() {
        return (
            <div style={MainContainer}>
                <Button onClick={this.onSignInToggle} bsStyle='info'>Log in</Button>
                <div style={MainDiv}>
                    <div style={container}>
                        <div style={Icon}>
                            L
                    </div>
                        <div>
                            <form>
                                <FormGroup
                                    controlId="formBasicText"
                                >
                                    <FormControl
                                        type="text"
                                        placeholder="Enter User"
                                        name='name'
                                        onChange={e => this.onChangeName(e)}
                                    />
                                </FormGroup>
                                <FormGroup
                                    controlId="formBasicText"
                                >
                                    <FormControl
                                        type="password"
                                        placeholder="Enter Password"
                                        name='password'
                                        onChange={e => this.onChangePass(e)}
                                    />
                                    <HelpBlock>Validation is based on your first login</HelpBlock>
                                </FormGroup>
                            </form>
                            <div style={button}>
                                <Button onClick={e => this.onSubmit(e)} bsStyle="primary" bsSize='large' block style={{ padding: '0px', height: '40px' }}>
                                    Log in
                                </Button>
                            </div>
                        </div>
                        <div style={sentenceTwo}>
                            <p>© 2018 Car Seeker</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapActionToProps = {
    onUpdateUser: updateUser,
    onGetUser: getUser,
    onSetTrueSignInToggle: setTrueSignInToggle,
    onSetFalseLogInToggle: setFalseLogInToggle
}

const mapStateToProps = state => ({
    userName: state.user.name,
    userPass: state.user.password,
    loginToggle: state.loginToggle
})

export default connect(mapStateToProps, mapActionToProps)(Login);