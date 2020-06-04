import React from 'react'
import styled, { css } from 'styled-components'

const buttonStyle = css`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  outline: 0;
  border: 0;
  cursor: pointer;
  color: #fff;
  background: var(--ion-color-primary);
  font-size: 1rem;
  & + & {
    margin-left: 1rem;
  }

  ${({ primary }) =>
    primary &&
    css`
      background: var(--ion-color-primary);

      &:hover {
        background: var(--ion-color-primary-tint);
      }

      &:active {
        background: var(--ion-color-primary-shade);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: var(--ion-color-secondary);

      &:hover {
        background: var(--ion-color-secondary-tint);
      }

      &:active {
        background: var(--ion-color-secondary-shade);
      }
    `}

  ${({ medium }) =>
    medium &&
    css`
      background: var(--ion-color-medium);

      &:hover {
        background: var(--ion-color-medium-tint);
      }

      &:active {
        background: var(--ion-color-medium-shade);
      }
    `}
    
  ${({ light }) =>
    light &&
    css`
      color: var(--ion-color-medium);
      background: var(--ion-color-light);

      &:hover {
        background: var(--ion-color-light-tint);
      }

      &:active {
        background: var(--ion-color-light-shade);
      }
    `}
`

const StyledButton = styled.button`
  ${buttonStyle}
`

const Button = (props) => {
  return <StyledButton {...props} />
}

export default Button
