import styled from 'styled-components'

export const GenerateGradientCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const AppCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 650px;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffff;
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;
`
export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffff;
  text-align: center;
  margin-bottom: 20px;
`

export const ButtonListCon = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-bottom: 25px;
`

export const Quotation = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffff;
  text-align: center;
  margin-bottom: 20px;
`

export const ColorGradientCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;
  margin-bottom: 20px;
`

export const ColorPickerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorIndication = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffff;
`
export const ColorInputPicker = styled.input`
  height: 60px;
  width: 120px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  height: 35px;
  width: 120px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`
