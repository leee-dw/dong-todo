import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { IoIosClose } from 'react-icons/io'
import Button from './common/Button'

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoModalBlock = styled.div`
  min-width: 512px;
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
`

const TodoModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 2rem;
`

const ModalTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`
const ModalIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    display: block;
    margin: auto;
    font-size: 2rem;
    color: var(--ion-color-medium);
  }
`

const TodoModalContent = styled.div`
  padding: 1rem;
`

const ModalForm = styled.form`
  display: block;
`

const InputWrapper = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
  border-radius: 1rem;
`

const InputLabel = styled.label`
  font-size: 0.875rem;
  color: var(--ion-color-medium);
`

const inputStyle = css`
  display: block;
  outline: none;
  border: none;
  margin: 0.5rem 0;
  border-bottom: 0.5px solid var(--ion-color-light);
  background: none;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 1.125rem;
  color: var(--ion-color-medium);
  &:focus {
    border-bottom: 0.5px solid var(--ion-color-primary);
  }
  &::placeholder {
    font-size: 1.125rem;
    color: var(--ion-color-medium-tint);
  }
`

const TodoTextInput = styled.input`
  ${inputStyle}
`

const DateInput = styled.input`
  ${inputStyle}
`

const ColorPickerWrapper = styled.div`
  display: block;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
`

const ColorPicker = styled.input`
  appearance: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  outline: none;
  cursor: pointer;

  &:checked {
    border: none;
    background-color: var(--ion-color-medium);
  }

  ${({ primary }) =>
    primary &&
    css`
      border: 1px solid var(--ion-color-primary);

      &:checked {
        background-color: var(--ion-color-primary);
      }
    `}

    
  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid var(--ion-color-secondary);
      &:checked {
        background-color: var(--ion-color-secondary);
      }
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      border: 1px solid var(--ion-color-tertiary);
      &:checked {
        background-color: var(--ion-color-tertiary);
      }
    `}

  ${({ success }) =>
    success &&
    css`
      border: 1px solid var(--ion-color-success);

      &:checked {
        background-color: var(--ion-color-success);
      }
    `}


  ${({ warning }) =>
    warning &&
    css`
      border: 1px solid var(--ion-color-warning);

      &:checked {
        background-color: var(--ion-color-warning);
      }
    `}

  ${({ danger }) =>
    danger &&
    css`
      border: 1px solid var(--ion-color-danger);

      &:checked {
        background-color: var(--ion-color-danger);
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`

const ButtonWrapper = styled.div`
  display: block;
  padding-top: 1rem;
`

const ModalButton = styled(Button)``

const TodoModal = ({ isOpen, onDismiss, onSubmit }) => {
  const [todoText, setTodoText] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [colorPicks, setColorPicks] = useState(null)

  const inputTextRef = useRef(null)

  useEffect(() => {
    inputTextRef.current && inputTextRef.current.focus()
  })

  return (
    isOpen && (
      <FullScreen>
        <TodoModalBlock>
          <TodoModalHeader>
            <ModalTitle>Todo Header</ModalTitle>
            <ModalIcon onClick={onDismiss}>
              <IoIosClose />
            </ModalIcon>
          </TodoModalHeader>
          <TodoModalContent>
            <ModalForm autoComplete='off' onSubmit={onSubmit}>
              <InputWrapper>
                <InputLabel htmlFor='todo'>할 일을 입력하세요</InputLabel>
                <TodoTextInput
                  id='todo'
                  type='text'
                  ref={inputTextRef}
                  onChange={(e) => {
                    setTodoText(e.target.value)
                  }}
                  placeholder='포트폴리오 만들기'
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor='color-picker'>
                  색깔도 정해보세요
                </InputLabel>
                <ColorPickerWrapper>
                  <ColorPicker
                    primary
                    name='color-picker'
                    type='radio'
                    value='primary'
                  />
                  <ColorPicker
                    secondary
                    name='color-picker'
                    type='radio'
                    value='secondary'
                  />
                  <ColorPicker
                    tertiary
                    name='color-picker'
                    type='radio'
                    value='tertiary'
                  />
                  <ColorPicker
                    success
                    name='color-picker'
                    type='radio'
                    value='success'
                  />
                  <ColorPicker
                    warning
                    name='color-picker'
                    type='radio'
                    value='warning'
                  />
                  <ColorPicker
                    danger
                    name='color-picker'
                    type='radio'
                    value='danger'
                  />
                </ColorPickerWrapper>
              </InputWrapper>
              <ButtonWrapper>
                <ModalButton primary>확인</ModalButton>
                <ModalButton light>취소</ModalButton>
              </ButtonWrapper>
            </ModalForm>
          </TodoModalContent>
        </TodoModalBlock>
      </FullScreen>
    )
  )
}

export default TodoModal
