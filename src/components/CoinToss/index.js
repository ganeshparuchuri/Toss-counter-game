// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0, total: 0}

  buttonClick = () => {
    const {heads, tails, total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({toss: tossResult})
    if (tossResult === 0) {
      this.setState(prev => ({heads: prev.heads + 1}))
      this.setState(prev => ({total: prev.total + 1}))
    } else {
      this.setState(prev => ({tails: prev.tails + 1}))
      this.setState(prev => ({total: prev.total + 1}))
    }
  }

  render() {
    const {toss, heads, tails, total} = this.state

    const image = toss
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="toss_main_container">
        <div className="toss_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={image} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.buttonClick}>
            Toss Coin
          </button>
          <div className="div1">
            <p className="values">Total:{total}</p>
            <p className="values">Heads:{heads}</p>
            <p className="values">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
