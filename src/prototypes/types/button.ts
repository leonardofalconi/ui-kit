export type TypeButtonSize = 'small' | 'normal' | 'large'

export type TypeButtonSizeOption = {
  width: number,
  height: number,
}

export type TypeButtonStyles = {
  background: string,
  borderColor: string,
  textColor: string,
  border: boolean,
  rounded: boolean,
  size: TypeButtonSize,
}