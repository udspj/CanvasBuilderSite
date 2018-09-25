import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import iconimg from "../resource/logonav.png";

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  tabRoot: {
    minWidth: 100,
  },
  indicator: {
    backgroundColor: '#3fc2ff',
  },
  appBar: {
    backgroundColor: '#000',
    textColor: '#fff'
  },
  menuButtonGroup: {
    indicatorColor: '#cc00ff',
  	marginLeft: 'auto',
  	marginRight: 'auto'
  },
  menuText: {
    color: "#fff"
  }
})

class HeaderBar extends Component {
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

  render() {
    const {classes} = this.props;
    const { anchorEl } = this.state;
    return (
      <div>

	      <AppBar position="static" color="default" className={classes.appBar}>
	        <Toolbar>
	          <img src={iconimg} alt="iconimg" />

		        <Tabs className={classes.menuButtonGroup} classes={{indicator: classes.indicator}}
		          value={this.state.value}
		          onChange={this.handleChange.bind(this)}
		        >
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="Features" component={Link} to="/CanvasBuilderSite/home"/>
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="Disabled" component={Link} to="/CanvasBuilderSite/videolist"/>
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="Active" component={Link} to="/CanvasBuilderSite/document"/>
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="Active" component={Link} to="/CanvasBuilderSite/cb"/>
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="Active" component={Link} to="/CanvasBuilderSite/about"/>
		        </Tabs>

	          <div>
		        <Button
		            buttonRef={node => {
		              this.anchorEl = node;
		            }}
		            aria-owns={this.state.open ? 'menu-list-grow' : null}
		            aria-haspopup="true"
		            onClick={this.handleToggle.bind(this)}
		            className={classes.menuText}
		        >
		            Toggle Menu Grow
		        </Button>
		        <Menu
		          id="simple-menu"
		          anchorEl={anchorEl}
		          open={Boolean(anchorEl)}
		          onClose={this.handleClose.bind(this)}
		        >
		          <MenuItem onClick={this.handleClose.bind(this,1)}>Profile</MenuItem>
		          <MenuItem onClick={this.handleClose.bind(this,2)}>My account</MenuItem>
		          <MenuItem onClick={this.handleClose.bind(this,3)}>Logout</MenuItem>
		        </Menu>
		      </div>

        	</Toolbar>
      	</AppBar>

      </div>
    );
  }

}

	          // <div className={classes.menuButtonGroup}>
		          // <Button className={classes.menuText} component={Link} to="/home">Features</Button>
		          // <Button className={classes.menuText} component={Link} to="/videolist">Enterprise</Button>
		          // <Button className={classes.menuText} component={Link} to="/document">Support</Button>
		          // <Button className={classes.menuText} component={Link} to="/cb">Support</Button>
		          // <Button className={classes.menuText} component={Link} to="/about">Support</Button>
	          // </div>

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
