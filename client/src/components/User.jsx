import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import { updateUser } from '../actions/user-actions';


class User extends Component {

    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    };

    onUpdateUser() {
    }


    render() {
        return (
            <Jumbotron>
                <h1>USER</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
        </p>
                <p>
                    <Button onClick={this.onUpdateUser} bsStyle="primary">Update User</Button>
                    {this.props.user}
                    
                </p>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.user.name
});

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps)(User);

