import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import homebk1 from "../resource/homebk1.jpg";
import logo from "../resource/logopage.png";
import homebk2 from "../resource/homebk2.jpg";
import homebk3 from "../resource/homebk3.jpg";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import HomeCard from '../components/HomeCard'

const styles = theme => ({
  section1: {
    backgroundImage: `url(${homebk1})`,
    textColor: '#fff',
    backgroundSize: '100%',
    height: '100vh',
    minHeight: '550px'
  },
  logo: {
  	marginTop: '80px'
  },
  title1: {
  	fontSize: '36px',
  	color: '#fff'
  },
  title2: {
  	fontSize: '22px',
  	color: '#fff',
  	marginTop: '-30px'
  },
  dlbtn: {
  	color: "#fff",
  	width: "200px",
  	borderRadius:'20px',
  	borderColor: '#fff'
  },
  section2: {
    backgroundImage: `url(${homebk2})`,
    textColor: '#fff',
    backgroundSize: 'cover',
    paddingBottom: '50px'
  },
  card1: {
  	marginTop: '50px',
  	marginLeft: '30px'
  },
  card2: {
  	marginTop: '260px',
  	marginLeft: '30px'
  },
  card3: {
  	marginTop: '30px',
  	marginLeft: '30px'
  },
  card4: {
  	marginTop: '280px',
  	marginLeft: '30px'
  },
  prodimgdiv: {
  	width: '28vw',
  	height: '28vw',
  	backgroundColor: '#cc00ff',
  	marginTop: '50px',
  	marginLeft: '30px'
  },
  prodimg: {
  	width: '100%',
  	height: '100%',
  },
  section3: {
    backgroundImage: `url(${homebk3})`,
    textColor: '#fff',
    backgroundSize: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
})

class HomePage extends Component {
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
      <div>

      <section className={classes.section1}>
      	<img className={classes.logo} src={logo} alt="iconimg" />
      	<p className={classes.title1}>HTML5 游戏和应用的集成开发环境</p>
      	<p className={classes.title2}>JAVASCRIPT / TYPESCRIPT</p>
      	<Button className={classes.dlbtn} variant="outlined" size="large" color="default">
          免费下载
        </Button>
      </section>

      <section className={classes.section2}>
      	<Grid container direction="row" justify="center" alignItems="flex-start">
	        <Grid item xs={3}>
	          <div className={classes.card1} >
	          	<HomeCard />
	          </div>
	        </Grid>
	        <Grid item xs={3}>
	          <div className={classes.card2} >
	          	<HomeCard />
	          </div>
	        </Grid>
	        <Grid item xs={3}>
	          <div className={classes.card3} >
	          	<HomeCard />
	          </div>
	        </Grid>
	        <Grid item xs={3}>
	          <div className={classes.card4} >
	          	<HomeCard />
	          </div>
	        </Grid>
	      </Grid>
      	  <Grid container direction="row" justify="center" alignItems="flex-start">
	        <Grid item xs={4}>
	          <div className={classes.prodimgdiv} >
	          	<img className={classes.prodimg} src="https://wx3.sinaimg.cn/mw690/005I51QUly1fvex057paaj30w90qj17s.jpg" alt="" />
	          </div>
	        </Grid>
	        <Grid item xs={4}>
	          <div className={classes.prodimgdiv} >
	          	<img className={classes.prodimg} src="https://wx3.sinaimg.cn/mw690/005I51QUly1fvex057paaj30w90qj17s.jpg" alt="" />
	          </div>
	        </Grid>
	        <Grid item xs={4}>
	          <div className={classes.prodimgdiv} >
	          	<img className={classes.prodimg} src="https://wx3.sinaimg.cn/mw690/005I51QUly1fvex057paaj30w90qj17s.jpg" alt="" />
	          </div>
	        </Grid>
	      </Grid>
      </section>

      <section className={classes.section3}>
      <div>
      	<img className={classes.logo} src={logo} alt="iconimg" />
      	<p className={classes.title1}>HTML5 游戏和应用的集成开发环境</p>
      	<p className={classes.title2}>JAVASCRIPT / TYPESCRIPT</p>
      	<Button className={classes.dlbtn} variant="outlined" size="large" color="default">
          免费下载
        </Button>
      	<img className={classes.logo} src={logo} alt="iconimg" />
      	<p className={classes.title1}>HTML5 游戏和应用的集成开发环境</p>
      	<p className={classes.title2}>JAVASCRIPT / TYPESCRIPT</p>
      	<Button className={classes.dlbtn} variant="outlined" size="large" color="default">
          免费下载
        </Button>
      	<img className={classes.logo} src={logo} alt="iconimg" />
      	<p className={classes.title1}>HTML5 游戏和应用的集成开发环境</p>
      	<p className={classes.title2}>JAVASCRIPT / TYPESCRIPT</p>
      	<Button className={classes.dlbtn} variant="outlined" size="large" color="default">
          免费下载
        </Button>
      </div>
      </section>

      </div>
    );
  }

}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
