import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ListTabBar from '../components/ListTabBar'
import eye from "../resource/eye.png";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  gridList: {
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '60px',
    paddingRight: '60px'
  },
  line: {
  	width: '90%',
  	height: '1px',
  	background: '#E0E0E0',
  	marginBottom: '5px',
  	marginLeft: 'auto',
  	marginRight: 'auto'
  },
  gridtile: {
  	backgroundColor: '#fff',
  	height: '100%'
  },
  bkdiv: {
  	backgroundColor: '#e1e1e1'
  },
  title: {
  	color: '#666',
  	marginLeft: '10px',
  	marginTop: '5px',
  	marginBottom: '5px'
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

const listdata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

class AboutPage extends Component {
    constructor() {
        super()
        this.state = {
        	open: false,
            value: 0
        }
    }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.bkdiv}>
      	<ListTabBar />

      	<GridList className={classes.gridList} cellHeight={250} cols={4} spacing={30}>   		
			{listdata.map(tile => (
				<GridListTile key={tile}>
					<div className={classes.gridtile}>
						<div>
							<img width='100%' height={100} src="https://material-ui.com/static/images/grid-list/breakfast.jpg" alt="sdfsad" />
						</div>
						<Grid container direction="row" justify="center" alignItems="flex-start">
			  		        <Grid item xs={9}>
			  		          	<p className={classes.title} align="left"> 教程1 </p>
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
				</GridListTile>
	        ))}
	    </GridList>

      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutPage);
