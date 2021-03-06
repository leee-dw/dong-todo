import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { IoIosAdd } from 'react-icons/io'

import TodoModal from './TodoModal'
import Button from './common/Button'
import Responsive from './common/Responsive'

const TodoFormBlock = styled(Responsive)`
  margin-top: 3rem;
`

const TodoFormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

const TodoFormTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`

const TodoFormButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  margin-left: 1rem;
`

const AddIcon = styled(IoIosAdd)`
  font-size: 2rem;
  display: block;
  margin: auto;
`

const TodoForm = () => {
  const [showModal, setShowModal] = useState(false)
  const today = moment().format('dddd, D MMMM')
  const onClickShowModal = () => {
    setShowModal(true)
  }

  const onDismiss = () => {
    setShowModal(false)
  }

  const onClickConfirm = () => {
    setShowModal(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit')
    setShowModal(false)
  }

  const handleKeyPress = useCallback((e) => {
    const { keyCode } = e
    return keyCode === 27 && onDismiss()
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <TodoFormBlock>
      <TodoFormHeader>
        <TodoFormTitle>{today}</TodoFormTitle>
        <TodoFormButton primary onClick={onClickShowModal}>
          <AddIcon />
        </TodoFormButton>
      </TodoFormHeader>
      <TodoModal isOpen={showModal} onDismiss={onDismiss} onSubmit={onSubmit} />
    </TodoFormBlock>
  )
}

export default TodoForm
