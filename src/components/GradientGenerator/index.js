import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GenerateGradientCon,
  AppCon,
  Title,
  SubTitle,
  ButtonListCon,
  Quotation,
  ColorGradientCon,
  ColorPickerCon,
  ColorIndication,
  ColorInputPicker,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({toColor: event.target.value})
  }

  activeDirection = direction => {
    this.setState({
      activeGradientDirection: direction,
    })
  }

  onGenerateGradient = () => {
    const {activeGradientDirection, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection} , ${fromColor} , ${toColor}`,
    })
  }

  render() {
    const {
      fromColor,
      toColor,
      activeGradientDirection,
      gradientValue,
    } = this.state
    return (
      <GenerateGradientCon
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <AppCon>
          <Title>Generate a CSS Color Gradient</Title>
          <SubTitle>Choose Direction</SubTitle>
          <ButtonListCon>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directions={eachDirection}
                activeDirection={this.activeDirection}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </ButtonListCon>

          <Quotation>Pick the Colors</Quotation>

          <ColorGradientCon>
            <ColorPickerCon>
              <ColorIndication>{fromColor}</ColorIndication>
              <ColorInputPicker
                type="color"
                value={fromColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorPickerCon>

            <ColorPickerCon>
              <ColorIndication>{toColor}</ColorIndication>
              <ColorInputPicker
                type="color"
                value={toColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorPickerCon>
          </ColorGradientCon>

          <GenerateButton type="button" onClick={this.onGenerateGradient}>
            Generate
          </GenerateButton>
        </AppCon>
      </GenerateGradientCon>
    )
  }
}

export default GradientGenerator
