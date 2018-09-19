import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';

class head extends Component {
  render() {
    return (
      <div>

<Button component={Link} to="/ca">
  link_ca
</Button>

<Button component={Link} to="/cb">
  link_cb
</Button>


      </div>
    );
  }
}

export default head;
