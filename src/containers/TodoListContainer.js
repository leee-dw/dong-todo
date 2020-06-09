import React, { useState, useRef, useCallback } from 'react'
import TodoList from '../components/TodoList'
import { atom, useRecoilState } from 'recoil'
import TodoForm from '../components/TodoForm'

const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      value: {
        color: 'primary',
        text: 'hello world',
      },
      isChecked: false,
    },
    {
      id: 1,
      value: {
        color: 'primary',
        text: 'how to make todo',
      },
      isChecked: false,
    },
    {
      id: 2,
      value: {
        color: 'primary',
        text: 'react is good',
      },
      isChecked: true,
    },
  ],
})

const TodoListContainer = () => {
  const [todos, setTodos] = useRecoilState(todoListState)
  const nextId = useRef(todos[todos.length - 1].id + 1)

  const onAddItem = useCallback(
    (value) => {
      setTodos((oldTodos) => [
        ...oldTodos,
        {
          id: nextId.current,
          value,
          isChecked: false,
        },
      ])
      nextId.current += 1
    },
    [setTodos]
  )

  return (
    <>
      <TodoForm onAddItem={onAddItem} />
      <TodoList todos={todos} />
    </>
  )
}

export default TodoListContainer
