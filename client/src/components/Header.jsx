import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import * as HeaderStyle from '../css/header.css';
import { Link } from 'react-router-dom';

import Login from '../components/Login';

import { connect } from 'react-redux';
import { updateMapCoords, getLocation, postCoords, getCoords, setDirections, setTrafficLawyer } from '../actions/map-actions';


class Header extends Component {

    constructor(props) {
        super(props);

        this.onUpdateCoords = this.onUpdateCoords.bind(this);
        this.onGetCoords = this.onGetCoords.bind(this);
        this.onGetLocation = this.onGetLocation.bind(this);
        this.onSetRoute = this.onSetRoute.bind(this);
        this.onSetTrafficLawyer = this.onSetTrafficLawyer.bind(this);
    }

    onUpdateCoords() {
        this.props.onUpdateLocation();
        this.props.postNewCoords();
    }

    onGetCoords() {
        this.props.getNewCoords();
    }

    onGetLocation() {
        this.props.onUpdateLocation();
    }

    onSetRoute() {
        navigator.geolocation.getCurrentPosition(position => {
            this.props.onSetDirection(position.coords.latitude, position.coords.longitude,
                this.props.mapLat, this.props.mapLng);
        });
    }

    onSetTrafficLawyer() {
        this.props.onTrafficLawyer(this.props.trafficLawyer);
    }

    componentDidMount() { }

    render() {
        if (this.props.loginToggle) {
            return <Login />
        } else {
            return (
                <Navbar inverse collapseOnSelect className={HeaderStyle.Navbar}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>Where is your Car</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                Home
                        </NavItem>
                            <NavItem eventKey={1} componentClass={Link} href="/User" to="/User">
                                {this.props.userName}
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
                            <NavDropdown eventKey={4} title="Options" id="basic-nav-dropdown">
                                <MenuItem onClick={this.onGetLocation} eventKey={4.1}>My Location</MenuItem>
                                <MenuItem onClick={this.onGetCoords} eventKey={4.2}>Where did I park? </MenuItem>
                                <MenuItem onClick={this.onSetRoute} eventKey={4.3}>G0! </MenuItem>
                                <MenuItem onClick={this.onSetTrafficLawyer} eventKey={4.4}>Traffic Lawyer </MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
    }
}

const mapStateToProps = state => ({
    mapLat: state.map.lat,
    mapLng: state.map.lng,
    mapZoom: state.map.zoom,
    map: state.map,
    trafficLawyer: state.map.trafficLawyer,
    loginToggle: state.loginToggle,
    userName: state.user.name
});

const mapActionsToProps = {
    onUpdateCoords: updateMapCoords,
    onUpdateLocation: getLocation,
    postNewCoords: postCoords,
    getNewCoords: getCoords,
    onSetDirection: setDirections,
    onTrafficLawyer: setTrafficLawyer
};

export default connect(mapStateToProps, mapActionsToProps)(Header);