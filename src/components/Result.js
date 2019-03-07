import React from 'react'
import { withStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const styles = {
	root: {
		background: blue[500],
		color: 'white',
		margin: '0 auto 2rem',
		width: 300,
		height: 50,
		borderRadius: 5,
		display: 'grid',
		alignContent: 'center',
	}
}

const Result = (props) => (
	<div className={props.classes.root}>
		<p>There are {props.quantity} items.</p>
	</div>
)

export default withStyles(styles)(Result)