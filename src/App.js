import React, { Component } from 'react'
import './App.css'
import MyButton from './components/MyButton'
import data from './data/dataset.json'
import { Grid } from '@material-ui/core'
import Result from './components/Result'
import ResultPlaceholder from './components/ResultPlaceholder'
import Header from './Header'

class App extends Component {
	state = {
		currentQuantity: 0,
	}

	buttonClicked = (event) => {
		this.setState({
			currentQuantity: event.currentTarget.value
		})
	}

  render() {
    return (
			<div className="App">

				<Header />

				<Grid container justify='center' direction='column'>
					<p style={{marginTop: 30}}><strong>Please choose a class!</strong></p>
					{this.state.currentQuantity !== 0 ? <Result quantity={this.state.currentQuantity} /> : <ResultPlaceholder />}
				</Grid>

				<Grid container justify='center' className='scrollable'>
					{data.map((record, key) => {
						return <MyButton
						key={key}
						buttonName={record['class'] !== 'undefined' ? record['class'] : 'missing'}
						onClick={this.buttonClicked}
						value={record['quantity']}
						/>
					})}
				</Grid>

			</div>
    )
  }
}

export default App
