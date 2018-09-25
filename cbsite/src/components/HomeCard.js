import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '20vw',
    minHeight: '50vh'
  },
  media: {
    height: '0',
    paddingTop: '80%',
  },
  line: {
  	width: '100%',
  	height: '2px',
  	background: '#E0E0E0',
  	marginBottom: '5px'
  }
};

class HomeCard extends Component {

  render() {
    const {classes} = this.props;
    return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						Lizard
					</Typography>
					<div className={classes.line}></div>
					<Typography component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardMedia
				className={classes.media}
				image="https://tva2.sinaimg.cn/crop.0.0.613.613.180/48a8af64jw8eyfl22ibj2j20h10h1ju3.jpg"
				/>
			</CardActionArea>
		</Card>
    );
  }

}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCard);
