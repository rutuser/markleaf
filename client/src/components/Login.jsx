import axios from 'axios';

import React, { Component } from 'react';
import { FormGroup, HelpBlock, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { updateUser, getUser, postUser } from '../actions/user-actions';

const MainDiv = {
    width: '100vw',
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

const or = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '7px',
    fontFamily: 'sans-serif',
    fontSize: '15px'
}

const button = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px'
}


class Login extends Component {

    constructor() {
        super();
        this.state = {
            animatedLog: 'L'
        }
    }


onChangePass = e => {
    this.props.onUpdateUser(this.props.userName, e.target.value);
}

onChangeName = e => {
    this.props.onUpdateUser(e.target.value, this.props.userPass);
    var animeLog = e.target.value;
    this.setState({
        animatedLog: animeLog.slice(animeLog.length-1).toUpperCase()
    })
}

onSubmitLogin = (e) => {
    e.preventDefault();
    if ((this.props.userName || this.props.userPass) === '') {
        alert('Enter a user and a password');
    }
    this.props.onGetUser(this.props.userName, this.props.userPass);
    this.confirmLogin();
}

confirmLogin = () => {
    var found;
    axios.get('https://api.marktleaf.me/api/user')
        .then(res => {
            res.data.map(user => {
                if (user.name === this.props.userName) {
                    found = true;
                }
            })
            // console.log(found);
            if (found == undefined) {
                alert('Sign in first');
            }
        })
        .catch(err => console.log(err));
}

onSubmitSignin = (e) => {
    e.preventDefault();
    if ((this.props.userName || this.props.userPass) === '') {
        alert('Enter a user and a password');
    } else {
        this.props.onPostUser(this.props.userName, this.props.userPass);
        alert('Your just signed in!');
    }
}

render() {
    return (
        <div style={MainDiv}>
            <div style={container}>
                <div style={Icon}>
                    {this.state.animatedLog}
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
                            <HelpBlock>If it is Your firts time, Sign in first please</HelpBlock>
                        </FormGroup>
                    </form>
                    <div style={button}>
                        <Button onClick={e => this.onSubmitLogin(e)} bsStyle="primary"
                            bsSize='large' block style={{ padding: '0px', height: '40px' }}>
                            Log in
                                </Button>
                        <div style={or}>
                            <div> or </div>
                        </div>
                        <Button onClick={e => this.onSubmitSignin(e)} bsStyle="danger"
                            bsSize='large' block style={{ padding: '0px', height: '40px' }}>
                            Sign up
                                </Button>
                    </div>
                </div>
                <div style={sentenceTwo}>
                    <p>© 2018 Car Seeker</p>
                </div>
            </div>
        </div>
    );
}
}

const mapActionToProps = {
    onUpdateUser: updateUser,
    onGetUser: getUser,
    onPostUser: postUser
}

const mapStateToProps = state => ({
    userName: state.user.name,
    userPass: state.user.password,
    userSignin: state.user.signedIn
})

export default connect(mapStateToProps, mapActionToProps)(Login);