import React from 'react'
import { TypeButtonSize } from '../types/button'

export interface InterfaceButton {
  title: string,
  size: TypeButtonSize,
  background: string,
  textColor: string,
  borderColor: string,
  rounded: boolean,
  border: boolean,
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
}