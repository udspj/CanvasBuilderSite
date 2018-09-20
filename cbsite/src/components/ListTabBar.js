import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import iconimg from "../resource/logonav.png";

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const styles = theme => ({
  appBar: {
    backgroundColor: '#fff',
    height: '40px'
  },
  menuButtonGroup: {
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	marginTop: '-24px'
  },
  menuText: {
    color: "#666"
  },
  downMenuText: {
    backgroundColor: '#666',
    color: "#fff",
  	marginTop: '-28px'
  }
})

class ListTabBar extends Component {
    constructor() {
        super()
        this.state = {
        	open: false,
            value: 0
        }
    }

    handleChange(event, value) {
	    this.setState({ value });
	}

	handleToggle(event) {
	    this.setState({ open: !this.state.open });
	};

	handleClose(index) {
		// if (this.anchorEl.contains(event.target)) {
		//   return;
		// }
		console.log(index)
		this.setState({ open: false });
	};

  render() {
    const {classes} = this.props;
    return (
      <div>

	      <AppBar position="static" color="default" className={classes.appBar}>
	        <Toolbar>

	          <div>
		        <Button
		            buttonRef={node => {
		              this.anchorEl = node;
		            }}
		            aria-owns={this.state.open ? 'menu-list-grow' : null}
		            aria-haspopup="true"
		            onClick={this.handleToggle.bind(this)}
		            className={classes.downMenuText}
		        >
		            IED和编程 ▼
		        </Button>
		        <Popper open={this.state.open} anchorEl={this.anchorEl} transition disablePortal>
		            {({ TransitionProps, placement }) => (
		              <Grow
		                {...TransitionProps}
		                id="menu-list-grow"
		                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
		              >
		                <Paper>
		                  <ClickAwayListener onClickAway={this.handleClose.bind(this,0)}>
		                    <MenuList>
		                      <MenuItem onClick={this.handleClose.bind(this,1)}>Profile</MenuItem>
		                      <MenuItem onClick={this.handleClose.bind(this,2)}>My account</MenuItem>
		                    </MenuList>
		                  </ClickAwayListener>
		                </Paper>
		              </Grow>
		            )}
		        </Popper>
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
