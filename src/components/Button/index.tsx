import React from 'react';
import { InterfaceButton } from '../../prototypes'
import { StyledButton } from './styles'

export const Button:React.FunctionComponent<InterfaceButton> = ({
  title = 'Button',
  background = '#000000',
  textColor = '#ffffff',
  borderColor = '#0af73e',
  size = 'normal',
  rounded = false,
  border = false,
  onClick = (e:React.MouseEvent<HTMLButtonElement>) => {}
}:InterfaceButton):JSX.Element => (
  <StyledButton
    background={background}
    borderColor={borderColor}
    textColor={textColor}
    rounded={rounded}
    border={border}
    size={size}
    type="button"
    onClick={onClick}>
      {title}
  </StyledButton>
)
