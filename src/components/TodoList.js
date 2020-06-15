import React from 'react'
import styled from 'styled-components'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md'

import Responsive from './common/Responsive'

const TodoListBlock = styled(Responsive)`
  margin-top: 2rem;
`

const TodoListItemBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`

const CheckBoxBlock = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`

const CheckBox = styled(MdCheckBox)`
  font-size: 1.5rem;
  color: var(--ion-color-primary);
`
const UnCheckBox = styled(MdCheckBoxOutlineBlank)`
  font-size: 1.5rem;
  color: var(--ion-color-primary);
`

const TodoText = styled.div``
const RemoveTodoBlock = styled.div``
const RemoveTodo = styled(MdRemoveCircleOutline)`
  font-size: 1.5rem;
  cursor: pointer;
`

const TodoListItem = ({ todo, onRemoveItem }) => {
  const { id, value, isChecked } = todo
  const { text, color } = value

  return (
    <TodoListItemBlock>
      <CheckBoxBlock>
        {isChecked ? <CheckBox /> : <UnCheckBox />}
        <TodoText>{text}</TodoText>
      </CheckBoxBlock>
      <RemoveTodoBlock>
        <RemoveTodo onClick={() => onRemoveItem(id)} />
      </RemoveTodoBlock>
    </TodoListItemBlock>
  )
}

const TodoList = ({ todos, onRemoveItem }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveItem={onRemoveItem} />
      ))}
    </TodoListBlock>
  )
}

export default TodoList
