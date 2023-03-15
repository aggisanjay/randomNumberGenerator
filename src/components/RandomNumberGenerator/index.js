// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNUmber: 0}

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNUmber: newRandomNumber})
  }

  render() {
    const {randomNUmber} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNUmber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
