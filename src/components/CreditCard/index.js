import {useState} from 'react'
import {
  Container,
  CardContainer,
  LeftSide,
  RightSide,
  Heading,
  CreditCardCon,
  Input,
  Para,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeNumber = event => setCardNumber(event.target.value)
  const onChangeName = event => setHolderName(event.target.value)

  return (
    <Container>
      <CardContainer>
        <LeftSide>
          <Heading>CREDIT CARD</Heading>
          <CreditCardCon data-testid="creditCard">
            <Para>{cardNumber}</Para>
            <Para>CARDHOLDER NAME</Para>
            <Para>{holderName}</Para>
          </CreditCardCon>
        </LeftSide>
        <RightSide>
          <h1>Payment Method</h1>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeName}
          />
        </RightSide>
      </CardContainer>
    </Container>
  )
}

export default CreditCard
