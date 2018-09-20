import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  bkdivv: {
    backgroundColor: '#000',
    height: '40px'
  }
})

class FooterBar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.bkdiv}>


      </div>
    );
  }
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterBar);
