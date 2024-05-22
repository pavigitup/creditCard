import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: #755fff;
  box-sizing: border-box;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #755fff;
  padding: 3%;
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #fff555;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const CreditCardCon = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  justify-content: center;
  background-size: cover;
  align-items: flex-start;
  padding: 10px;
  color: #fff;
  width: 80%;
  min-height: 200px;
  border-radius: 20px;
`

export const Img = styled.img`
  width: 80%;
`

export const Input = styled.input`
  margin-bottom: 20px;
`

export const Para = styled.p`
  height: 50px;
  background-color: #234544;
`
