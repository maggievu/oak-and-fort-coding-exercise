import React from 'react'
import { withStyles, Button } from '@material-ui/core'

const styles = {
	root: {
		margin: '.5rem 1rem',
	},
}

const MyButton = (props) => (
	<Button
		className={props.classes.root}
		variant="contained"
		color="secondary"
		onClick={props.onClick}
		value={props.value}
	>
		{props.buttonName}
	</Button>
)

export default withStyles(styles)(MyButton)