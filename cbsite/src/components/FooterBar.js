import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  appBar: {
    backgroundColor: '#000',
    textColor: '#fff',
    height: 140
  },
  bkdiv: {
    backgroundColor: '#000'
  },
  copyright: {
    color: '#fff'
  }
})

class FooterBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.bkdiv}>

        <AppBar position="static" color="default" className={classes.appBar}>

            <p className={classes.copyright}>copyright</p>


        </AppBar>

      </div>
    );
  }
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterBar);
