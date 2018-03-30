import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  card: {
    maxWidth: 250,
    display: 'inline-block',
    margin: theme.spacing.unit,
  },
  media: {
    height: 200,
  },
  counter: {
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'space-between',
  },
})

class PersonComponent extends Component {
  state = {
    voteCounter: 0,
  }

  voteIncrement = () => {
    this.setState(state => ({ voteCounter: state.voteCounter + 1 }))
  }

  voteDecrement = () => {
    this.setState(state => ({ voteCounter: state.voteCounter - 1 }))
  }

  render() {
    const { voteCounter } = this.state
    const { name, image, classes } = this.props

    return (
      <Card className={classes.card} raised>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="headline"
            className={classes.counter}
          >
            {voteCounter}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.voteIncrement}
          >+ 1</Button>
          <Button
            variant="raised"
            color="secondary"
            onClick={this.voteDecrement}
          >- 1</Button>
        </CardActions>
      </Card>
    )
  }
}

PersonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(PersonComponent)
