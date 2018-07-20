import React, { Component } from 'react';
import * as LoginStyle from '../css/login.css'
import { Label, FormGroup, ControlLabel, HelpBlock, FormControl, Button } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';

const MainDiv = {
    width: '100%',
    height: '100vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

const sentenceOne = {
    textAlign: 'center',
    fontSize: '30px',
    marginTop: '10px',
    fontFamily: 'sans-serif'
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

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handler() {
        console.log(this.state.value);
    }

    render() {
        return (
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
                                    value={this.state.value}
                                    onChange={this.handler}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <FormControl
                                    type="password"
                                    placeholder="Enter Password"
                                    name='password'
                                />
                                <HelpBlock>Validation is based on your first login</HelpBlock>
                            </FormGroup>
                            <div style={button}>
                                <Button bsStyle="primary" bsSize='large' block style={{padding: '0px', height: '40px'}}>
                                    <input style={{width: '100%', background: 'transparent', border: 'transparent'}} type="submit" value='Log in'/>
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div style={sentenceTwo}>
                        <p>© 2018 Car Seeker</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;