import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, activeDirection, isActive} = props
  const {displayText, value} = directions

  const sendDirection = () => {
    activeDirection(value)
  }

  return (
    <ListItem>
      <Button isActive={isActive} onClick={sendDirection}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
