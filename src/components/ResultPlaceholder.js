import React from 'react'
import { withStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors';

const styles = {
	root: {
		backgroundColor: grey[200],
		borderRadius: 5,
		width: 300,
		height: 50,
		margin: '0 auto 2rem',
	}
}

const ResultPlaceholder = (props) => (
	<div className={props.classes.root}></div>
)

export default withStyles(styles)(ResultPlaceholder)