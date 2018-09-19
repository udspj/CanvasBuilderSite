import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    backgroundColor: '#000',
    textColor: '#fff'
  },
  menuButtonGroup: {
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
	          <img src={iconimg} alt="iconimg" />
	          <div className={classes.menuButtonGroup}>
		          <Button className={classes.menuText} component={Link} to="/home">Features</Button>
		          <Button className={classes.menuText} component={Link} to="/cb">Enterprise</Button>
		          <Button className={classes.menuText} component={Link} to="/ca">Support</Button>
		          <Button className={classes.menuText} component={Link} to="/cb">Support</Button>
		          <Button className={classes.menuText} component={Link} to="/cb">Support</Button>
	          </div>
	          
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

        	</Toolbar>
      	</AppBar>

      </div>
    );
  }

}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
