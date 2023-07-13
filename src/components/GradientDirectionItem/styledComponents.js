import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  height: 35px;
  width: 100px;
  border-radius: 10px;
  outline: none;
  background-color: #ffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  border: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
