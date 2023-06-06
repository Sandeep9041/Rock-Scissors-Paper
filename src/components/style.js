import styled from 'styled-components'

export const Button = styled.button`
  //   width: 95px;
  height: 47px;
  color: #223a5f;
  border: 0px;
  font-size: 21px;
  font-family: 'Bree Serif';
  border-radius: 7px;
  padding: 11px;
  cursor: pointer;
`
export const HomeBg = styled.div`
  background-color: #223a5f;
  min-height: 155vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px;
`

export const RulesBtn = styled.div`
  text-align: end;
  width: 100%;
`
export const PopupBg = styled.div`
  background-color: #ffffff;
  width: 85vw;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

export const PopupImg = styled.img`
  width: 75%;
  height: 85%;
`

export const PopupContainer = styled.div`
  width: 100%;
`

export const HeaderBg = styled.div`
  width: 80%;
  border: 3px solid #ffffff;
  border-radius: 11px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Unordered = styled.ul`
  padding: 0px;
`
export const Line = styled.h1`
  list-style: none;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 27px;
  @media screen and (max-width: 767px) {
    font-size: 21px;
    font-weight: 500;
  }
`
export const Box = styled.div`
  width: 175px;
  /* height: 100%; */
  background-color: #ffffff;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`
export const ScoreHeading = styled.p`
  font-size: 27px;
  font-family: 'Bree Serif';
  color: #223a5f;
`

export const Score = styled.p`
  font-size: 35px;
  color: #223a5f;
  margin-top: 0px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameBg = styled.div`
  width: 75%;
  margin-top: 75px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const GameUl = styled.ul`
  width: 70%;
  height: 355px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const GameLine = styled.li`
  text-align: none;
  margin: 0px;
  list-style: none;
  margin-bottom: 15px;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`
export const GameImage = styled.img`
  width: 215px;
  height: 215px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`
export const GameButton = styled.button`
  background-color: transparent;
  border: 0px;
`
export const ScoreUl = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  width: 75%;
`
export const ScoreLine = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Gamers = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Button
