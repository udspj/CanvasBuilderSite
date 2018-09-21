import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import documentIcon from "../resource/document.png";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  bkdiv: {
    backgroundColor: '#e1e1e1'
  },
  list: {
    backgroundColor: '#fff',
    margin: '20px'
  },
  content: {
    backgroundColor: '#fff',
    margin: '20px',
    minHeight: '80vh',
    padding: '20px'
  },
  bar: {
    // position: 'absolute',
    // left: 0,
    // right: 0
  },
  grid: {
    backgroundColor: '#e1e1e1',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 104
  }
})

const listdata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

class DocumentPage extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.bkdiv}>

        <ListTabBar className={classes.bar} />

        <Grid className={classes.grid} container direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={3}>
                <List className={classes.list}>
                  {listdata.map((tile,reactid) => (
                    <ListItem button key={reactid}>
                      <img src={documentIcon} alt=''/>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                  ))}
                </List>
            </Grid>
            <Grid item xs={9}>
                <div className={classes.content}>
                  文档正文（是否需要从外部导入markdown）
                </div>
            </Grid>
        </Grid>
        
      </div>
    );
  }
}

DocumentPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DocumentPage);
