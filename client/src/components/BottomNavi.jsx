import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

import { setToggle } from '../actions/toggle-drawer-actions';


class SwipeableTemporaryDrawer extends React.Component {

    constructor() {
        super(); 

        this.toggleDrawerHandler = this.toggleDrawerHandler.bind(this);
    }

    toggleDrawerHandler() {
        this.props.onSetToggle(false);
    }


  render() {

    return (
      <div>
        <SwipeableDrawer
          anchor="bottom"
          open={this.props.toggleDrawer}
          onClose={this.toggleDrawerHandler}
          onOpen={this.props.onSetToggle(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawerHandler}
            onKeyDown={this.props.onSetToggle(this.props.toggleDrawer)}
            style={{background: 'transparent'}}
          >
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(221, 221, 221, 0.1)'}}>
              <div style={{width: '50px', height: '50px'}}>Uno</div>
              <div style={{width: '50px', height: '50px'}}>Dos</div>
              <div style={{width: '50px', height: '50px'}}>Tres</div>
              <div style={{width: '50px', height: '50px'}}>Cuatro</div>
          </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    toggleDrawer: state.toggleDrawer
});

const mapActionsToProps = {
    onSetToggle: setToggle
}


export default connect(mapStateToProps, mapActionsToProps)(SwipeableTemporaryDrawer);