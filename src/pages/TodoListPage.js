import React from 'react'
import TodoFormContainer from '../containers/TodoFormContainer'
import TodoListContainer from '../containers/TodoListContainer'

const TodoListPage = () => {
  return (
    <>
      <TodoFormContainer />
      <TodoListContainer />
    </>
  )
}

export default TodoListPage
