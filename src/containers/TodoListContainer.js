import React, { useState } from 'react'
import TodoList from '../components/TodoList'

const TodoListContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'hello world',
      isChecked: false,
    },
    {
      id: 1,
      text: 'how to make todo',
      isChecked: false,
    },
    {
      id: 2,
      text: 'react is good',
      isChecked: true,
    },
  ])

  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default TodoListContainer
