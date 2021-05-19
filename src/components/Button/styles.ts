import { styled } from '../../theme';
import { TypeButtonStyles, TypeButtonSize, TypeButtonSizeOption } from '../../prototypes'

const getButtonSize = (size:TypeButtonSize): TypeButtonSizeOption => {
  const options:{
    small: TypeButtonSizeOption, 
    normal: TypeButtonSizeOption,
    large: TypeButtonSizeOption
  } = {
    small: {width: 8, height: 2.5},
    normal: {width: 15, height: 4},
    large: {width: 20, height: 5},
  }
  return options[size];
}

export const StyledButton = styled.button<TypeButtonStyles>`
  cursor: pointer;
  background-color: ${props => props.background};
  border-color: ${props => props.borderColor};
  color: ${props => props.textColor};
  min-width: ${props => `${getButtonSize(props.size).width}rem`};
  min-height: ${props => `${getButtonSize(props.size).height}rem`};
  max-width: 100%;
  ${props => props.border ? `border-width: '1px'; border-style: solid;` : `border: 0;`};
  ${props => props.rounded ? `border-radius: 10px;` : 'border-radius: 0;'};
`;