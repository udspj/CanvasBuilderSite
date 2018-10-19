import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import documentIcon from "../../static/resource/document.png";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import './document.css';

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
    backgroundColor: '#ffffff00',
    // backgroundColor: '#e1e1e1',
    // position: 'absolute',
    // marginLeft: '200px',
    // right: 0,
    // top: 104
  },
  listcontent: {
    // backgroundColor: '#cc00ff',
    marginLeft: '10px',
    width: '100%'
  },
  content1: {
    color: '#666',
    fontSize: '15px',
    marginBottom: '0px'
  },
  content2: {
    color: '#666',
    fontSize: '12px',
    marginTop: '0px'
  },
  downlist: {
    width: '200px',
    position: 'absolute',
    backgroundColor: '#666',
    color: '#fff',
    fontSize: '14px',
    marginTop: '40px'
  }
})

const listdata = ["文档1abc","文档2abc","文档3abc","文档4abc","文档5abc","文档6abc","文档7abc","文档8abc","文档9abc","文档10abc",]

const menudata = ["菜单1abc","菜单2abc","菜单3abc","菜单4abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc",]

class DocumentPage extends Component {
  constructor() {
    super()
    this.state = {
      selectedindex: 0,
      menuopen: false
    }
  }

  onListitemClick(reactid) {
    this.setState({"selectedindex":reactid})
  }

  downmenuClick() {
    const menuopen = !this.state.menuopen;
    this.setState({ menuopen });
  }

  render() {
    const {classes} = this.props;
    const {menuopen} = this.state;
    return (
      <div className={classes.bkdiv}>

        <div className={classes.downlist} 
        style={{ display: menuopen ? 'block' : 'none', animation: menuopen ? '0.15s open linear' : '0.15s close linear' }}>
          <br />
          {menudata.map((tile,reactid) => (
            <div key={reactid}>
              {menudata[reactid]}
              <br />
              <br />
            </div>
          ))}
        </div>

        <ListTabBar className={classes.bar} downlistClicked={this.downmenuClick.bind(this)}/>

        <Grid className={classes.grid} container direction="row" justify="center" alignItems="flex-start"
        style={{ marginLeft: menuopen ? '200px' : '0px', width: menuopen ? 'calc(100% - 200px)' : '100%' }}>
          <Grid item xs={3}>
            <List className={classes.list}>
              {listdata.map((tile,reactid) => (
                <ListItem button key={reactid} onClick={() => this.onListitemClick(reactid)} disableRipple={true}>
                  <img src={documentIcon} alt=''/>
                  <div className={classes.listcontent}>
                    <p className={classes.content1} style={{ color: reactid===this.state.selectedindex ? '#3fc2ff' : '#666' }}>{tile}</p>
                    <p className={classes.content2}>Jan 9, 2014</p>
                  </div>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            <div className={classes.content}>
              {listdata[this.state.selectedindex]}
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
