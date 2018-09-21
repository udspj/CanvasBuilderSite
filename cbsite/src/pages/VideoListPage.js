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
    backgroundColor: '#e1e1e1',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 119
  },
  gridtile: {
  	backgroundColor: '#fff',
  	height: '100%'
  },
  bkdiv: {
  	backgroundColor: '#e1e1e1'
  },
  bar: {
    position: 'absolute',
    left: 0,
    right: 0
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
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: '#3fc2ff'}
    } else {
      linkStyle = {color: '#666'}
    }
    return (
      <div className={classes.bkdiv}>

      	<GridList className={classes.gridList} cellHeight={250} cols={4} spacing={30}>   		
    			{listdata.map((tile,reactid) => ( 
    				<GridListTile key={tile}>
              <Fade in={checked}
              {...(checked ? { timeout: 500 } : {})} style={{ transitionDelay: checked ? 200*reactid : 0 }}>
                <div>
                  <VideoGridTile />
                </div>
              </Fade>
    				</GridListTile>
	        ))}
        </GridList>
      
        <ListTabBar className={classes.bar} />

      </div>
    );
  }
}

VideoListPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoListPage);
