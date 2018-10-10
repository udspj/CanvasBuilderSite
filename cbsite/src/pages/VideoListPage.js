import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import VideoGridTile from '../components/VideoGridTile'
import eye from "../resource/eye.png";

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
  }
})

const listdata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

class VideoListPage extends Component {
    constructor() {
        super()
        this.state = {
          checked: true,
          hover: false
        }
    }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    const {classes} = this.props;
    const { checked } = this.state;
    return (
      <div className={classes.bkdiv}>
      
        <ListTabBar className={classes.bar} />

        <div className={classes.gridList}>
        	<GridList cellHeight={250} cols={4} spacing={30}>   		
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