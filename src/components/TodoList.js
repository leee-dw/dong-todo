import React from 'react'
import styled from 'styled-components'
import Responsive from './common/Responsive'

const TodoListBlock = styled(Responsive)`
  margin-top: 2rem;
`

const TodoItem = () => {}

const TodoList = ({ todos }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <p>{todo.text}</p>
      ))}
    </TodoListBlock>
  )
}

export default TodoList
