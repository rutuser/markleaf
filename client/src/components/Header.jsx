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
        this.onGetLocation = this.onGetLocation.bind(this);
        this.onSetRoute = this.onSetRoute.bind(this);
        this.onSetTrafficLawyer = this.onSetTrafficLawyer.bind(this);
        this.onSetDirectionToggle = this.onSetDirectionToggle.bind(this);
    }

    onUpdateCoords() {
        this.props.onUpdateLocation(12);
        this.props.postNewCoords(this.props.userName);
    }

    onGetCoords() {
        this.props.getNewCoords(this.props.userName);
    }

    onGetLocation() {
        this.props.onUpdateLocation(11);
    }

    onSetRoute() {
        navigator.geolocation.getCurrentPosition(position => {
            axios.get('/api/coords')
                .then(res => res.data.map(coords => {
                    if (coords.user === this.props.userName) {
                        this.props.onSetDirection(position.coords.latitude + 0.00001, position.coords.longitude + 0.00001,
                            coords.lat, coords.lng);
                    }
                }))
                .catch(err => console.log(err));
        });
    }

    onSetTrafficLawyer() {
        this.props.onTrafficLawyer(this.props.trafficLawyer);
    }

    onSetDirectionToggle() {
        this.props.onDirectionToggle(this.props.directionToggle);
    }

    componentDidMount() { }

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
                        <NavItem onClick={this.onGetLocation} eventKey={4.1}>My Location</NavItem>
                        <NavItem onClick={this.onGetCoords} eventKey={4.2}>Where did I park? </NavItem>
                        <NavItem onClick={this.onSetRoute} eventKey={4.3}>G0! </NavItem>
                        <NavItem onClick={this.onSetDirectionToggle} eventKey={4.4}>ST0P </NavItem>
                        <NavItem onClick={this.onSetTrafficLawyer} eventKey={4.5}>Traffic Lawyer </NavItem>
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
    getNewCoords: getCoords,
    onSetDirection: setDirections,
    onTrafficLawyer: setTrafficLawyer,
    onDirectionToggle: setDirectionToggle
};

export default connect(mapStateToProps, mapActionsToProps)(Header);