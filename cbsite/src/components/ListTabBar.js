import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import iconimg from "../../static/resource/logonav.png";

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  appBar: {
    backgroundColor: '#fff',
    height: '40px',
  },
  menuButtonGroup: {
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	marginTop: '-24px'
  },
  menuText: {
    color: "#999"
  },
  downMenuText: {
    backgroundColor: '#666',
    color: "#fff",
  	marginTop: '-28px'
  },
  downListBtn: {
  	backgroundColor: "#333",
  	position: 'absolute',
  	width: '200px',
  	height: '40px',
  	color: '#fff',
  	top: '0px',
  	left: '0px'
  },
  downListBtnText: {
  	marginTop:0,
  	lineHeight: '40px',
  	fontSize: '14px'
  }
})

class ListTabBar extends Component {
    constructor() {
        super()
        this.state = {
        	open: false,
    		anchorEl: null,
            value: 0
        }
    }

    handleChange(event, value) {
	    this.setState({ value });
	}

	handleToggle(event) {
	    this.setState({ open: !this.state.open });
    	this.setState({ anchorEl: event.currentTarget });
	};

	handleClose(index) {
		// if (this.anchorEl.contains(event.target)) {
		//   return;
		// }
		console.log(index)
		this.setState({ open: false });
    	this.setState({ anchorEl: null });
	};

	downlistClick(event){
        event.preventDefault();
        this.props.downlistClicked();
    }

  render() {
    const {classes} = this.props;
    const { anchorEl } = this.state;
    return (
      <div>

	    <AppBar position="static" color="default" className={classes.appBar}>
	        <Toolbar>

				<div className={classes.downListBtn}>
					<p className={classes.downListBtnText} onClick={this.downlistClick.bind(this)}>IED和编程 ▼</p>
				</div>

	          <div className={classes.menuButtonGroup}>
		          <Button className={classes.menuText}>Features</Button>
		          <Button className={classes.menuText}>Enterprise</Button>
		          <Button className={classes.menuText}>Support</Button>
		          <Button className={classes.menuText}>Support</Button>
		          <Button className={classes.menuText}>Support</Button>
	          </div>
	          
        	</Toolbar>
      	</AppBar>

      </div>
    );
  }

}

ListTabBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListTabBar);
