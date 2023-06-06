import {
  GameBg,
  GameUl,
  GameLine,
  GameButton,
  GameImage,
  Gamers,
  ScoreLine,
  ScoreUl,
  ScoreContainer,
  Button,
} from '../style'
import Context from '../Context'

const Game = () => (
  <Context.Consumer>
    {value => {
      const {
        choiceList,
        startGame,
        showScores,
        game,
        otherId,
        score,
        getShow,
        won,
        textContent,
      } = value
      const getId = id => {
        startGame(id)
      }
      const show = () => {
        getShow()
      }
      /* console.log(game)
      console.log(otherId) */
      const you = choiceList.filter(each => each.id === game)
      const others = choiceList.filter(each => each.id === otherId)
      const result = () => {
        if (score > 0) {
          return true
        }
        return false
      }

      return (
        <GameBg>
          {!showScores && (
            <GameUl>
              {choiceList.map(each => (
                <GameLine key={each.id}>
                  <GameButton
                    type="button"
                    data-testid={`${each.id.toLowerCase()}Button`}
                    onClick={() => {
                      getId(each.id)
                    }}
                  >
                    <GameImage src={each.imageUrl} alt={each.id} />
                  </GameButton>
                </GameLine>
              ))}
            </GameUl>
          )}
          {showScores && (
            <ScoreContainer>
              <ScoreUl>
                <ScoreLine>
                  <Gamers>YOU</Gamers>
                  <GameImage src={you[0].imageUrl} alt="your choice" />
                </ScoreLine>
                <ScoreLine>
                  <Gamers>OPPONENT</Gamers>
                  <GameImage src={others[0].imageUrl} alt="opponent choice" />
                </ScoreLine>
              </ScoreUl>
              <Gamers>{textContent}</Gamers>
              <Button type="button" onClick={show}>
                Play Again
              </Button>
            </ScoreContainer>
          )}
        </GameBg>
      )
    }}
  </Context.Consumer>
)

export default Game
