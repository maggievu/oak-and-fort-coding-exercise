import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
	root: {
		background: '#e91e63',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 10,
	},
})

const Header = (props) => (
	<div className={props.classes.root}></div>
)

export default withStyles(styles)(Header)