import axios from 'axios';

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as HeaderStyle from '../css/header.css'
import { connect } from 'react-redux';
import {
    updateMapCoords, getLocation, postCoords, getCoords, setDirections, setTrafficLawyer,
    setDirectionToggle
} from '../actions/map-actions';


class Header extends Component {

    constructor(props) {
        super(props);

        this.onUpdateCoords = this.onUpdateCoords.bind(this);
        this.onGetCoords = this.onGetCoords.bind(this);
    }

    onUpdateCoords() {
        this.props.onUpdateLocation(12);
        this.props.postNewCoords(this.props.userName);
    }

    onGetCoords() {
        this.props.getNewCoords(this.props.userName);
    }






    render() {
        return (
            <Navbar inverse collapseOnSelect className={HeaderStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.props.userName}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} target='_blank' href="https://twitter.com/car_where">Status</MenuItem>
                            <MenuItem eventKey={3.2} componentClass={Link} href="/Info" to='/Info'>Info</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem onClick={this.onUpdateCoords} eventKey={1} href="#">
                            Park!
                        </NavItem>
                        <NavItem onClick={this.onGetCoords} eventKey={4.2}>
                            Where did I park?
                         </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    mapLat: state.map.lat,
    mapLng: state.map.lng,
    mapZoom: state.map.zoom,
    map: state.map,
    trafficLawyer: state.map.trafficLawyer,
    userName: state.user.name,
    directionToggle: state.map.directionToggle
});

const mapActionsToProps = {
    onUpdateCoords: updateMapCoords,
    onUpdateLocation: getLocation,
    postNewCoords: postCoords,
    getNewCoords: getCoords
};

export default connect(mapStateToProps, mapActionsToProps)(Header);