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

const TodoListItem = styled.div`
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
`

// const TodoItem = ({ todo }) => {
//   const { isChecked, value, id } = todo
//   return (
//     <li>
//       {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//       <p>{value.text}</p>
//     </li>
//   )
// }

const TodoList = ({ todos }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem key={todo.id}>
          <CheckBoxBlock>
            {todo.isChecked ? <CheckBox /> : <UnCheckBox />}
            <TodoText>할 일</TodoText>
          </CheckBoxBlock>
          <RemoveTodoBlock>
            <RemoveTodo />
          </RemoveTodoBlock>
        </TodoListItem>
      ))}
    </TodoListBlock>
  )
}

export default TodoList
