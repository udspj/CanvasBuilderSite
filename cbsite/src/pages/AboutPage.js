import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import eye from "../../static/resource/eye.png";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  title: {
    fontSize: '50px',
    color: '#333',
    textAlign: 'center'
  },
  line: {
    width: '30%',
    height: '4px',
    background: '#333',
    marginTop: '-40px',
    marginBottom: '70px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  container: {
    width: '240px',
    height: '150px',
    border: '1px solid #e1e1e1',
    boxShadow: '0px 0px 22px 0px #f2f6fe',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title1: {
    fontSize: 20,
    textAlign: 'center'
  },
  title2: {
    color: '#999',
    textAlign: 'center'
  },
  iconcontent: {
    paddingLeft: '50px',
    paddingRight: '50px'
  },
  bkdiv: {
    minHeight: '65vh'
  }
})

class AboutPage extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.bkdiv}>

          <p className={classes.title}>神炎科技</p>
          <div className={classes.line}></div>
          <div className={classes.iconcontent}>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              <Grid item xs={3}>
                <div className={classes.container}>
                  <p className={classes.title1}>完整项目模板</p>
                  <p className={classes.title2}>完整项目模板</p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.container}>
                  <p className={classes.title1}>完整项目模板</p>
                  <p className={classes.title2}>完整项目模板</p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.container}>
                  <p className={classes.title1}>完整项目模板</p>
                  <p className={classes.title2}>完整项目模板</p>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.container}>
                  <p className={classes.title1}>完整项目模板</p>
                  <p className={classes.title2}>完整项目模板</p>
                </div>
              </Grid>
            </Grid>
          </div>

      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutPage);
