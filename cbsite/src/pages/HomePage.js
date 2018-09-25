import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import homebk1 from "../resource/homebk1.jpg";
import logo from "../resource/logopage.png";
import homebk21 from "../resource/homebk2_1.jpg";
import homebk22 from "../resource/homebk2_2.jpg";
import homebk3 from "../resource/homebk3.jpg";
import blueimg from "../resource/blueimg.png";
import icon1 from "../resource/homeicon1.png";
import icon2 from "../resource/homeicon2.png";
import icon3 from "../resource/homeicon3.png";
import shapes from "../resource/homeshape.png";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import HomeCard from '../components/HomeCard';

import './home.css';

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
  section21: {
    backgroundImage: `url(${homebk21})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textColor: '#fff',
    width: '100%',
    height: '51vw',
    alignItems:'center',
    justifyContent:'center',
    display:'-webkit-flex'
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
  section22: {
    backgroundImage: `url(${homebk22})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textColor: '#fff',
    width: '100%',
    height: '40vw',
    alignItems:'center',
    justifyContent:'center',
    display:'-webkit-flex'
  },
  // prodimgdiv: {
  // 	width: '28vw',
  // 	height: '28vw',
  // 	// backgroundColor: '#cc00ff',
  // 	marginTop: '50px',
  // 	marginLeft: 'auto',
  // 	marginRight: 'auto'
  // },
  // prodimg: {
  // 	width: '100%',
  // 	height: '100%',
  // },
  bk: {
    backgroundImage: `url(${homebk3})`,
    textColor: '#fff',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  },
  line: {
  	width: '20%',
  	height: '2px',
  	background: '#fff',
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	marginBottom: '50px'
  },
  linedard: {
    width: '20%',
    height: '2px',
    background: '#808fb9',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50px'
  },
  bluecontent: {
  	padding: '50px'
  },
  blueimg: {
  	boxShadow: '0px 0px 22px 0px #333'
  },
  whitecontent: {
  	backgroundColor: '#fff',
  	paddingBottom: '70px',
  	paddingTop: '50px'
  },
  title3: {
  	fontSize: '30px',
  	color: '#fff'
  },
  title4: {
  	fontSize: '30px',
  	color: '#808fb9'
  },
  linelong: {
  	width: '100%',
  	height: '1px',
  	background: '#808fb9',
  	marginBottom: '50px'
  },
  iconcontent: {
  	backgroundColor: '#fcfcfd',
  	padding: '50px'
  },
  iconimg: {
  	width: '90px',
  	height: '90px',
  	marginLeft: 'auto',
  	marginRight: 'auto'
  },
  title5: {
  	fontSize: '22px',
  	color: '#808fb9'
  },
  shapes: {
  	marginTop: '50px',
  	marginBottom: '50px'
  },
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
      <div className={classes.bk}>

      <section className={classes.section1}>
      	<img className={classes.logo} src={logo} alt="iconimg" />
      	<p className={classes.title1}>HTML5 游戏和应用的集成开发环境</p>
      	<p className={classes.title2}>JAVASCRIPT / TYPESCRIPT</p>
      	<Button className={classes.dlbtn} variant="outlined" size="large" color="default">
          免费下载
        </Button>
      </section>

      <section className={classes.section21}>
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
      </section>

      <section className={classes.section22}>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid item xs={4}>
            <div className="prodimgdiv" >
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="prodimgdiv" >
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="prodimgdiv" >
            </div>
          </Grid>
        </Grid>
      </section>

      <section>
	      <div className={classes.bluecontent}>
	      	<p className={classes.title3}>网络游戏开发</p>
	      	<div className={classes.line}></div>
          <div className="blueimg" />
	      </div>
	      <div className={classes.whitecontent}>
	      	<p className={classes.title4}>网络游戏开发</p>
	      	<div className={classes.linedard}></div>
	      	<img className={classes.shapes} src={shapes} alt="" />
	      	<div className={classes.linelong}></div>
	      	<p className={classes.title4}>网络游戏开发</p>
	      	<div className={classes.line}></div>
	      	<div className={classes.iconcontent}>
	      	  <Grid container direction="row" justify="center" alignItems="flex-start">
  		        <Grid item xs={4}>
  		          	<img className={classes.iconimg} src={icon1} alt="" />
  	      			<p className={classes.title5}>完整项目模板</p>
  		        </Grid>
  		        <Grid item xs={4}>
  		          	<img className={classes.iconimg} src={icon2} alt="" />
  	      			<p className={classes.title5}>完整项目模板</p>
  		        </Grid>
  		        <Grid item xs={4}>
  		          	<img className={classes.iconimg} src={icon3} alt="" />
  	      			<p className={classes.title5}>完整项目模板</p>
  		        </Grid>
  		      </Grid>
	      	</div>
	      </div>
	      <div className={classes.bluecontent}>
	      	<p className={classes.title3}>网络游戏开发</p>
	      	<div className={classes.line}></div>
          <div className="blueimg" />
	      </div>
	      <div className={classes.bluecontent}>
	      	<p className={classes.title3}>网络游戏开发</p>
	      	<div className={classes.line}></div>
          <div className="blueimg" />
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
