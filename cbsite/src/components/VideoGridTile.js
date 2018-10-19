import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import eye from "../../static/resource/eye.png";

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  gridtile: {
  	backgroundColor: '#fff',
  	height: '100%'
  },
  title: {
  	color: '#666',
  	marginLeft: '10px',
  	marginTop: '5px',
  	marginBottom: '5px',
    cursor: 'default'
  },
  line: {
    width: '90%',
    height: '1px',
    background: '#E0E0E0',
    marginBottom: '5px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  content: {
  	color: '#666',
  	marginTop: '10px',
  	marginLeft: '10px',
  	marginRight: '10px'
  },
  eyetext: {
  	color: '#999',
  	fontSize: '10px'
  },
  eyeimg: {
  	marginTop: '16px'
  }
})

class VideoGridTile extends Component {
    constructor() {
        super()
        this.state = {
          hover: false
        }
    }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    const {classes} = this.props;
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {color: '#3fc2ff'}
    } else {
      linkStyle = {color: '#666'}
    }
    return (
      <div className={classes.gridtile}>
        <div>
          <img width='100%' height={100} src="https://material-ui.com/static/images/grid-list/breakfast.jpg" alt="sdfsad" />
        </div>
        <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={9}>
                <p className={classes.title} style={linkStyle} align="left" onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}> 教程1 </p>
            </Grid>
            <Grid item xs={1}>
                <img className={classes.eyeimg} src={eye} alt="" />
            </Grid>
            <Grid item xs={2}>
              <p className={classes.eyetext}>1111</p>
            </Grid>
        </Grid>
        <div className={classes.line}></div>
        <p className={classes.content} align="left"> 描述描述描述描述描述描述，描述描述描述描述描述描述，描述描述，描述描述描述描述 </p>
      </div>
    );
  }
}

VideoGridTile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoGridTile);
