import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import '../css/bottomNavi.css';

import { connect } from 'react-redux';

import { setToggle } from '../actions/toggle-drawer-actions';


class SwipeableTemporaryDrawer extends React.Component {

    constructor() {
        super(); 

        this.toggleDrawerFalse = this.toggleDrawerFalse.bind(this);
        this.toggleDrawerTrue = this.toggleDrawerTrue.bind(this);
    }

    toggleDrawerFalse() {
        this.props.onSetToggle(false);
    }

    toggleDrawerTrue() {
      this.props.onSetToggle(true);
    }


  render() {

    return (
      <div>
        <SwipeableDrawer
          anchor="bottom"
          open={this.props.toggleDrawer}
          onClose={this.toggleDrawerFalse}
          onOpen={this.toggleDrawerTrue}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawerFalse}
            onKeyDown={this.toggleDrawertrue}
          >
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div className='button'>Uno</div>
              <div className='button'>Dos</div>
              <div className='button'>Tres</div>
              <div className='button'>Cuatro</div>
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