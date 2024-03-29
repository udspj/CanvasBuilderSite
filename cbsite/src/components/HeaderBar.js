import React, { Component } from 'react';
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import iconimg from "../../static/resource/logonav.png";

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Router from 'next/router'

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
	    if (value == 0) {
	    	Router.push("/home");
	    }
	    if (value == 1) {
	    	Router.push("/videolist");
	    }
		if (value == 2) {
	    	Router.push("/document");
		}
	    if (value == 3) {
	    	Router.push("/blockchain");
	    }
	    if (value == 4) {
	    	Router.push("/about");
	    }
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
		          <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="首页" disableRipple={true}/>
                  <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="视频教学" disableRipple={true}/>
                  <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="文档" disableRipple={true}/>
                  <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="区块链" disableRipple={true}/>
                  <Tab className={classes.menuText} classes={{ root: classes.tabRoot }} label="关于我们" disableRipple={true}/>
		        </Tabs>

		    <ClickAwayListener onClickAway={this.handleClose.bind(this,0)}>
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
		            语言选择
		        </Button>
            	<Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
		            {({ TransitionProps, placement }) => (
		              <Grow
		                {...TransitionProps}
		                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
		              >
		                <Paper>
		                    <MenuList>
		                      <MenuItem onClick={this.handleClose.bind(this,1)}>中文</MenuItem>
		                      <MenuItem onClick={this.handleClose.bind(this,2)}>English</MenuItem>
		                    </MenuList>
		                </Paper>
		              </Grow>
		            )}
	            </Popper>
		      </div>
		    </ClickAwayListener>

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
