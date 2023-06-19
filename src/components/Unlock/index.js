import {useState} from 'react'
import {AppContainer, Image, ResultText, Button} from './styledComponents'

const image1 = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const image2 = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isTrue, setIsTrue] = useState(false)

  const onClickButton = () => {
    setIsTrue(prevState => !prevState)
  }

  const image = isTrue ? image2 : image1
  const altText = isTrue ? 'unlock' : 'lock'
  const result = isTrue ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isTrue ? 'Lock' : 'Unlock'

  return (
    <AppContainer className="bg-container">
      <Image src={image} alt={altText} className="image" />
      <ResultText className="text">{result}</ResultText>
      <Button className="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}
export default Unlock
