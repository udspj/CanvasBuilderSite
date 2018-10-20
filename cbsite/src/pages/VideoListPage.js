import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import VideoGridTile from '../components/VideoGridTile'
import eye from "../../static/resource/eye.png";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
  gridList: {
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '60px',
    paddingRight: '60px',
    // backgroundColor: '#e1e1e1',
    backgroundColor: '#ffffff00',
    width: '1100px',
    marginRight: 'auto',
    marginLeft: 'auto'
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 119
  },
  gridtile: {
  	backgroundColor: '#fff',
  	height: '100%'
  },
  bkdiv: {
  	backgroundColor: '#e1e1e1'
  },
  bar: {
    // position: 'absolute',
    // left: 0,
    // right: 0
  },
  downlist: {
    width: '200px',
    position: 'absolute',
    backgroundColor: '#666',
    color: '#fff',
    fontSize: '14px',
    marginTop: '40px'
  },
  nemutexts: {
    textAlign: 'center'
  }
})

const listdata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

const menudata = ["菜单1abc","菜单2abc","菜单3abc","菜单4abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc","菜单1abc",]

class VideoListPage extends Component {
  constructor() {
    super()
    this.state = {
      checked: true,
      hover: false,
      menuopen: false,
      listmovex: 0
    }
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  downmenuClick() {
    const w = (this.refs.bkdiv.clientWidth - 1100)/2 - 200;
    this.setState({"listmovex":0})
    if ( w < 0) {
      this.setState({"listmovex":-w})
    }
    const menuopen = !this.state.menuopen;
    this.setState({ menuopen });
  }

  render() {
    const {classes} = this.props;
    const { checked } = this.state;
    const {menuopen,listmovex} = this.state;
    return (
      <div className={classes.bkdiv} ref="bkdiv">

        <div className={classes.downlist}
        style={{ display: menuopen ? 'block' : 'none', animation: menuopen ? '0.15s open linear' : '0.15s close linear' }}>
          <br />
          {menudata.map((tile,reactid) => (
            <div key={reactid} className={classes.nemutexts}>
              {menudata[reactid]}
              <br />
              <br />
            </div>
          ))}
        </div>

        <ListTabBar className={classes.bar} downlistClicked={this.downmenuClick.bind(this)}/>

        <div className={classes.gridList}>
        	<GridList cellHeight={250} cols={4} spacing={30}
          style={{ marginLeft: menuopen ? listmovex+'px' : '0px' }}>   		
      			{listdata.map((tile,reactid) => ( 
      				<GridListTile key={reactid}>
                <Fade in={checked}
                {...(checked ? { timeout: 500 } : {})} style={{ transitionDelay: checked ? 200*reactid : 0 }}>
                  <div>
                    <VideoGridTile />
                  </div>
                </Fade>
      				</GridListTile>
  	        ))}
          </GridList>
        </div>
        
      </div>
    );
  }
}

VideoListPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoListPage);
