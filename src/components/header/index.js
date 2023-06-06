import {HeaderBg, Unordered, Line, Score, Box, ScoreHeading} from '../style'
import Context from '../Context'

const Header = () => (
  <Context.Consumer>
    {value => {
      const {score} = value
      return (
        <HeaderBg>
          <Unordered>
            <Line>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Line>
          </Unordered>
          <Box>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </Box>
        </HeaderBg>
      )
    }}
  </Context.Consumer>
)
export default Header
