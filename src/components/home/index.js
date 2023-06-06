import Popup from 'reactjs-popup'
import Header from '../header'
import Game from '../Game'
import Context from '../Context'
import {
  Button,
  HomeBg,
  RulesBtn,
  PopupBg,
  PopupImg,
  PopupContainer,
} from '../style'

const Home = props => {
  const {choicesList} = props

  return (
    <Context.Consumer>
      {value => {
        const {game, score, choiceList, showScores} = value
        return (
          <HomeBg>
            <Header />
            <Game />
            <RulesBtn>
              <PopupContainer>
                <Popup modal trigger={<Button type="button">Rules</Button>}>
                  {close => (
                    <>
                      <PopupBg>
                        <PopupImg
                          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                          alt="rules"
                        />
                      </PopupBg>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Close
                      </button>
                    </>
                  )}
                </Popup>
              </PopupContainer>
            </RulesBtn>
          </HomeBg>
        )
      }}
    </Context.Consumer>
  )
}
export default Home
