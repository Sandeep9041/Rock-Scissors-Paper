import {Component} from 'react'
import './App.css'
import Home from './components/home'
import Context from './components/Context'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    game: '',
    choiceList: [],
    showScores: false,
    otherId: '',
    won: false,
    textContent: '',
  }

  componentDidMount() {
    this.setState({choiceList: choicesList})
  }

  startGame = id => {
    const gameRandomId = Math.floor(Math.random() * choicesList.length)
    const otherId = choicesList[gameRandomId].id
    if (otherId === id) {
      this.setState({
        textContent: 'IT IS DRAW',
      })
    } else if (otherId === 'PAPER' && id === 'ROCK') {
      this.setState({
        textContent: 'YOU LOSE',
      })

      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (otherId === 'SCISSORS' && id === 'PAPER') {
      this.setState({
        textContent: 'YOU LOSE',
      })

      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (otherId === 'ROCK' && id === 'SCISSORS') {
      this.setState({
        textContent: 'YOU LOSE',
      })

      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState({
        textContent: 'YOU WON',
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    this.setState({
      game: id,
      showScores: true,
      otherId,
    })

    // this.getResult()
  }

  getShow = () => {
    this.setState({showScores: false})
  }

  render() {
    const {
      score,
      game,
      choiceList,
      showScores,
      otherId,
      won,
      textContent,
    } = this.state
    console.log(otherId, game)
    return (
      <Context.Provider
        value={{
          score,
          game,
          showScores,
          choiceList,
          startGame: this.startGame,
          otherId,
          getShow: this.getShow,
          won,
          textContent,
        }}
      >
        <Home choicesList={choicesList} />
      </Context.Provider>
    )
  }
}

export default App
