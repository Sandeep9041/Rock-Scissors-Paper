import React from 'react'

const Context = React.createContext({
  score: 0,
  game: '',
  choiceList: [],
  startGame: () => {},
  showScores: false,
  otherId: '',
})
export default Context
